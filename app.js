/* ============================================================
   Section 1: Constants & Config
   ============================================================ */

const STORAGE_KEYS = {
  exercises: 'wt_exercises',
  sessions: 'wt_sessions',
  sets: 'wt_sets',
  settings: 'wt_settings',
  activeSession: 'wt_active_session',
};

const MUSCLE_GROUPS = ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Cardio', 'Other'];

const VERSION = '1.0.0';

const DEFAULT_EXERCISES = [
  { name: 'Barbell Squat',      muscleGroup: 'Legs' },
  { name: 'Romanian Deadlift',  muscleGroup: 'Legs' },
  { name: 'Bench Press',        muscleGroup: 'Chest' },
  { name: 'Incline Dumbbell Press', muscleGroup: 'Chest' },
  { name: 'Pull Up',            muscleGroup: 'Back' },
  { name: 'Barbell Row',        muscleGroup: 'Back' },
  { name: 'Overhead Press',     muscleGroup: 'Shoulders' },
  { name: 'Lateral Raise',      muscleGroup: 'Shoulders' },
  { name: 'Bicep Curl',         muscleGroup: 'Arms' },
  { name: 'Tricep Pushdown',    muscleGroup: 'Arms' },
  { name: 'Cable Crunch',       muscleGroup: 'Core' },
];

/* ============================================================
   Section 2: Storage Layer
   ============================================================ */

function storageGet(key) {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}
function storageSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getExercises()    { return storageGet(STORAGE_KEYS.exercises) || []; }
function getSessions()     { return storageGet(STORAGE_KEYS.sessions) || []; }
function getSets()         { return storageGet(STORAGE_KEYS.sets) || []; }
function getSettings()     { return Object.assign({ defaultUnit: 'kg' }, storageGet(STORAGE_KEYS.settings) || {}); }
function getActiveSessionId() { return storageGet(STORAGE_KEYS.activeSession) || null; }

function saveExercises(arr) { storageSet(STORAGE_KEYS.exercises, arr); }
function saveSessions(arr)  { storageSet(STORAGE_KEYS.sessions, arr); }
function saveSets(arr)      { storageSet(STORAGE_KEYS.sets, arr); }
function saveSettings(obj)  { storageSet(STORAGE_KEYS.settings, obj); }
function setActiveSession(id) { storageSet(STORAGE_KEYS.activeSession, id); }
function clearActiveSession() { localStorage.removeItem(STORAGE_KEYS.activeSession); }

/* ============================================================
   Section 3: Data Helpers
   ============================================================ */

function generateId(prefix) {
  return prefix + '_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
}

function getSessionSets(sessionId) {
  return getSets().filter(s => s.sessionId === sessionId);
}
function getExerciseSets(exerciseId) {
  return getSets().filter(s => s.exerciseId === exerciseId);
}
function getSessionExerciseIds(sessionId) {
  const seen = new Set();
  getSessionSets(sessionId).forEach(s => seen.add(s.exerciseId));
  return [...seen];
}
function getLastSetForExerciseInSession(sessionId, exerciseId) {
  const sets = getSets().filter(s => s.sessionId === sessionId && s.exerciseId === exerciseId);
  if (!sets.length) return null;
  return sets[sets.length - 1];
}
function getNextSetNumber(sessionId, exerciseId) {
  return getSets().filter(s => s.sessionId === sessionId && s.exerciseId === exerciseId).length + 1;
}
function computeSessionDuration(session) {
  const end = session.finishedAt ? new Date(session.finishedAt) : new Date();
  const ms = end - new Date(session.startedAt);
  return formatDuration(ms);
}
function computeTotalVolume(sets) {
  return sets.reduce((sum, s) => sum + (s.weight * s.reps), 0);
}
function getExerciseProgressData(exerciseId) {
  const sessions = getSessions().filter(s => s.finishedAt).sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt));
  const labels = [], data = [];
  sessions.forEach(sess => {
    const sets = getSets().filter(s => s.sessionId === sess.id && s.exerciseId === exerciseId);
    if (sets.length) {
      labels.push(formatDateShort(sess.startedAt));
      data.push(Math.max(...sets.map(s => s.weight)));
    }
  });
  return { labels, data };
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}
function formatDateShort(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}
function formatDuration(ms) {
  if (ms < 0) ms = 0;
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  if (h > 0) return h + 'h ' + String(m).padStart(2, '0') + 'm';
  return m + ':' + String(s).padStart(2, '0');
}
function formatTimerLive(ms) {
  if (ms < 0) ms = 0;
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  if (h > 0) return h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}
function todayLabel() {
  return new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

/* ============================================================
   Section 4: State
   ============================================================ */

const state = {
  activeTab: 'today',
  activeSessionId: null,
  timerInterval: null,
  expandedSessionId: null,
  exerciseFilter: 'All',
  exerciseSearch: '',
  confirmingFinish: false,
  progressChart: null,
  sheetOpen: false,
};

/* ============================================================
   Section 5: Navigation
   ============================================================ */

function switchTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabName).classList.add('active');
  document.querySelector('[data-tab="' + tabName + '"]').classList.add('active');
  state.activeTab = tabName;
  renderTab(tabName);
}

function renderTab(tabName) {
  if (tabName === 'today')     renderTodayTab();
  if (tabName === 'history')   renderHistoryTab();
  if (tabName === 'exercises') renderExercisesTab();
  if (tabName === 'settings')  renderSettingsTab();
}

function initNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

/* ============================================================
   Section 6: Today Tab
   ============================================================ */

function renderTodayTab() {
  const el = document.getElementById('tab-today');
  state.activeSessionId = getActiveSessionId();
  if (state.activeSessionId) {
    renderActiveSession(el);
  } else {
    renderIdleState(el);
  }
}

function renderIdleState(el) {
  const sessions = getSessions().filter(s => s.finishedAt).sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt)).slice(0, 3);
  el.innerHTML = `
    <div class="idle-center">
      <div class="idle-title">Ready to train?</div>
      <div class="idle-date">${todayLabel()}</div>
      <button class="btn btn-primary" id="btn-start-session" style="margin-top:12px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Start Workout
      </button>
    </div>
    ${sessions.length ? `
    <div style="padding:0 16px;">
      <div class="settings-label" style="margin-bottom:10px;">Recent Sessions</div>
      ${sessions.map(s => recentSessionMini(s)).join('')}
    </div>` : ''}
  `;
  el.querySelector('#btn-start-session').addEventListener('click', startSession);
}

function recentSessionMini(session) {
  const sets = getSessionSets(session.id);
  const exIds = [...new Set(sets.map(s => s.exerciseId))];
  return `<div class="card" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;padding:12px 14px;">
    <div>
      <div style="font-weight:600;font-size:14px;">${formatDate(session.startedAt)}</div>
      <div style="font-size:12px;color:var(--color-text-secondary);margin-top:2px;">${exIds.length} exercises &middot; ${sets.length} sets</div>
    </div>
    <div style="font-size:13px;color:var(--color-text-secondary);">${computeSessionDuration(session)}</div>
  </div>`;
}

function renderActiveSession(el) {
  const session = getSessions().find(s => s.id === state.activeSessionId);
  if (!session) { clearActiveSession(); state.activeSessionId = null; renderIdleState(el); return; }
  const exIds = getSessionExerciseIds(state.activeSessionId);

  el.innerHTML = `
    <div id="session-header">
      <div id="session-timer">00:00</div>
      <div id="finish-area">
        ${state.confirmingFinish
          ? `<div class="confirm-finish">
               <button class="btn btn-ghost btn-sm" id="btn-cancel-finish">Cancel</button>
               <button class="btn btn-danger btn-sm" id="btn-confirm-finish">Confirm Finish</button>
             </div>`
          : `<button class="btn btn-danger btn-sm" id="btn-finish">Finish</button>`
        }
      </div>
    </div>
    <div id="session-body" style="padding:14px 16px 8px;">
      ${exIds.map(eid => renderExerciseCard(eid)).join('')}
      <button class="btn btn-secondary btn-full" id="btn-add-exercise" style="margin-top:4px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add Exercise
      </button>
    </div>
  `;

  updateTimerDisplay();
  startTimer();

  if (state.confirmingFinish) {
    el.querySelector('#btn-cancel-finish').addEventListener('click', () => {
      state.confirmingFinish = false;
      renderTodayTab();
    });
    el.querySelector('#btn-confirm-finish').addEventListener('click', finishSession);
  } else {
    el.querySelector('#btn-finish').addEventListener('click', () => {
      state.confirmingFinish = true;
      renderTodayTab();
    });
  }

  el.querySelector('#btn-add-exercise').addEventListener('click', openAddExerciseSheet);

  exIds.forEach(eid => {
    const logBtn = el.querySelector(`[data-log-exercise="${eid}"]`);
    if (logBtn) logBtn.addEventListener('click', () => logSet(eid));

    const wMinus = el.querySelector(`[data-weight-minus="${eid}"]`);
    const wPlus  = el.querySelector(`[data-weight-plus="${eid}"]`);
    const rMinus = el.querySelector(`[data-reps-minus="${eid}"]`);
    const rPlus  = el.querySelector(`[data-reps-plus="${eid}"]`);

    if (wMinus) wMinus.addEventListener('click', () => stepField(el.querySelector(`[data-weight-input="${eid}"]`), -stepWeight(), 0, 999));
    if (wPlus)  wPlus.addEventListener('click',  () => stepField(el.querySelector(`[data-weight-input="${eid}"]`), +stepWeight(), 0, 999));
    if (rMinus) rMinus.addEventListener('click', () => stepField(el.querySelector(`[data-reps-input="${eid}"]`), -1, 1, 100));
    if (rPlus)  rPlus.addEventListener('click',  () => stepField(el.querySelector(`[data-reps-input="${eid}"]`), +1, 1, 100));
  });
}

function renderExerciseCard(exerciseId) {
  const exercise = getExercises().find(e => e.id === exerciseId);
  if (!exercise) return '';
  const sets = getSets().filter(s => s.sessionId === state.activeSessionId && s.exerciseId === exerciseId);
  const lastSet = sets.length ? sets[sets.length - 1] : null;
  const defWeight = lastSet ? lastSet.weight : 20;
  const defReps   = lastSet ? lastSet.reps : 10;

  const setRows = sets.map((s, i) => `
    <tr>
      <td style="color:var(--color-text-tertiary);font-size:12px;">${i + 1}</td>
      <td>${s.weight}${s.unit}</td>
      <td>${s.reps}</td>
    </tr>
  `).join('');

  return `
    <div class="ex-card">
      <div class="ex-card-header">
        <span class="ex-card-name">${exercise.name}</span>
        <span class="tag">${exercise.muscleGroup}</span>
      </div>
      ${sets.length ? `
      <div class="ex-card-sets">
        <table class="sets-table">
          <thead><tr><th>Set</th><th>Weight</th><th>Reps</th></tr></thead>
          <tbody>${setRows}</tbody>
        </table>
      </div>` : ''}
      <div class="ex-card-entry">
        <div class="entry-row">
          <span class="entry-label">Weight</span>
          <div class="stepper">
            <button class="stepper-btn" data-weight-minus="${exerciseId}">−</button>
            <input class="stepper-input" type="number" min="0" max="999" value="${defWeight}" data-weight-input="${exerciseId}" />
            <button class="stepper-btn" data-weight-plus="${exerciseId}">+</button>
          </div>
          <span style="font-size:13px;color:var(--color-text-secondary);margin-left:4px;">${getSettings().defaultUnit}</span>
        </div>
        <div class="entry-row">
          <span class="entry-label">Reps</span>
          <div class="stepper">
            <button class="stepper-btn" data-reps-minus="${exerciseId}">−</button>
            <input class="stepper-input" type="number" min="1" max="100" value="${defReps}" data-reps-input="${exerciseId}" />
            <button class="stepper-btn" data-reps-plus="${exerciseId}">+</button>
          </div>
        </div>
        <button class="btn btn-primary btn-full" data-log-exercise="${exerciseId}" style="margin-top:2px;">
          Log Set ${sets.length + 1}
        </button>
      </div>
    </div>
  `;
}

function stepWeight() {
  return getSettings().defaultUnit === 'kg' ? 2.5 : 5;
}

function stepField(input, delta, min, max) {
  if (!input) return;
  let val = parseFloat(input.value) || 0;
  val = Math.min(max, Math.max(min, val + delta));
  input.value = Number.isInteger(val) ? val : val.toFixed(1);
}

function startSession() {
  const id = generateId('sess');
  const sessions = getSessions();
  sessions.push({ id, startedAt: new Date().toISOString(), finishedAt: null, notes: '' });
  saveSessions(sessions);
  setActiveSession(id);
  state.activeSessionId = id;
  state.confirmingFinish = false;
  renderTodayTab();
}

function finishSession() {
  stopTimer();
  const sessions = getSessions();
  const idx = sessions.findIndex(s => s.id === state.activeSessionId);
  if (idx !== -1) sessions[idx].finishedAt = new Date().toISOString();
  saveSessions(sessions);
  clearActiveSession();
  state.activeSessionId = null;
  state.confirmingFinish = false;
  showToast('Workout complete!', 'success');
  renderTodayTab();
}

function startTimer() {
  stopTimer();
  state.timerInterval = setInterval(updateTimerDisplay, 1000);
}

function stopTimer() {
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
}

function updateTimerDisplay() {
  const el = document.getElementById('session-timer');
  if (!el || !state.activeSessionId) return;
  const session = getSessions().find(s => s.id === state.activeSessionId);
  if (!session) return;
  el.textContent = formatTimerLive(Date.now() - new Date(session.startedAt));
}

function logSet(exerciseId) {
  const weightInput = document.querySelector(`[data-weight-input="${exerciseId}"]`);
  const repsInput   = document.querySelector(`[data-reps-input="${exerciseId}"]`);
  const weight = parseFloat(weightInput?.value);
  const reps   = parseInt(repsInput?.value);
  if (isNaN(weight) || isNaN(reps) || weight <= 0 || reps <= 0) {
    showToast('Enter valid weight and reps', 'error');
    return;
  }
  const sets = getSets();
  const setNum = getNextSetNumber(state.activeSessionId, exerciseId);
  sets.push({
    id: generateId('set'),
    sessionId: state.activeSessionId,
    exerciseId,
    setNumber: setNum,
    weight,
    reps,
    unit: getSettings().defaultUnit,
    loggedAt: new Date().toISOString(),
  });
  saveSets(sets);
  showToast(`Set ${setNum} logged — ${weight}${getSettings().defaultUnit} × ${reps}`, 'success');
  // Re-render just the exercise cards without rebuilding the whole tab
  renderActiveSession(document.getElementById('tab-today'));
}

function openAddExerciseSheet() {
  const addedIds = new Set(getSessionExerciseIds(state.activeSessionId));
  const exercises = getExercises();

  function renderList(query) {
    const q = query.toLowerCase();
    const filtered = exercises.filter(e => e.name.toLowerCase().includes(q) || e.muscleGroup.toLowerCase().includes(q));
    if (!filtered.length) return '<div class="text-secondary" style="padding:20px 0;text-align:center;font-size:14px;">No exercises found</div>';
    return filtered.map(e => {
      const added = addedIds.has(e.id);
      return `<div class="sheet-ex-row${added ? ' added' : ''}" data-add-ex="${e.id}">
        <div>
          <div class="sheet-ex-row-name">${e.name}</div>
          <div style="font-size:12px;color:var(--color-text-secondary);margin-top:2px;">${e.muscleGroup}</div>
        </div>
        ${added
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
        }
      </div>`;
    }).join('');
  }

  openSheet({
    title: 'Add Exercise',
    renderFn: () => `
      <div class="search-wrap" style="margin-bottom:14px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input class="input" type="search" id="sheet-search" placeholder="Search exercises…" autocomplete="off" />
      </div>
      <div class="sheet-ex-row text-accent" id="btn-new-ex-shortcut" style="font-weight:600;">
        <span>+ New Exercise</span>
      </div>
      <div id="sheet-ex-list">${renderList('')}</div>
    `,
    onOpen: () => {
      const search = document.getElementById('sheet-search');
      const list   = document.getElementById('sheet-ex-list');
      search.addEventListener('input', () => {
        list.innerHTML = renderList(search.value);
        attachExerciseRowListeners(addedIds);
      });
      document.getElementById('btn-new-ex-shortcut').addEventListener('click', () => {
        closeSheet();
        setTimeout(() => openNewExerciseSheet(true), 320);
      });
      attachExerciseRowListeners(addedIds);
    },
  });
}

function attachExerciseRowListeners(addedIds) {
  document.querySelectorAll('[data-add-ex]').forEach(row => {
    if (addedIds.has(row.dataset.addEx)) return;
    row.addEventListener('click', () => addExerciseToSession(row.dataset.addEx));
  });
}

function addExerciseToSession(exerciseId) {
  const added = new Set(getSessionExerciseIds(state.activeSessionId));
  if (added.has(exerciseId)) return;
  // We use an empty "anchor" set to track order; instead we just log the exercise implicitly when the first set is logged.
  // To track which exercises are added before sets, we use a transient marker.
  if (!window._sessionExercises) window._sessionExercises = {};
  if (!window._sessionExercises[state.activeSessionId]) window._sessionExercises[state.activeSessionId] = [];
  if (!window._sessionExercises[state.activeSessionId].includes(exerciseId)) {
    window._sessionExercises[state.activeSessionId].push(exerciseId);
  }
  closeSheet();
  setTimeout(() => renderTodayTab(), 320);
}

// Extend getSessionExerciseIds to include pre-added (no sets yet) exercises
const _originalGetSessionExerciseIds = getSessionExerciseIds;
function getSessionExerciseIdsWithPending(sessionId) {
  const fromSets = _originalGetSessionExerciseIds(sessionId);
  const pending  = (window._sessionExercises || {})[sessionId] || [];
  const merged = [...fromSets];
  pending.forEach(id => { if (!merged.includes(id)) merged.push(id); });
  return merged;
}

/* ============================================================
   Section 7: History Tab
   ============================================================ */

function renderHistoryTab() {
  const el = document.getElementById('tab-history');
  const sessions = getSessions().filter(s => s.finishedAt).sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));

  if (!sessions.length) {
    el.innerHTML = `
      <div class="page-header"><div class="page-title">History</div></div>
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
        <div class="empty-state-title">No workouts yet</div>
        <div class="empty-state-sub">Start your first session from the Today tab.</div>
      </div>`;
    return;
  }

  el.innerHTML = `
    <div class="page-header"><div class="page-title">History</div></div>
    <div style="padding:0 16px;" id="history-list">
      ${sessions.map(s => buildSessionCardHTML(s)).join('')}
    </div>`;

  sessions.forEach(session => {
    const card = el.querySelector(`[data-session-card="${session.id}"]`);
    if (!card) return;
    card.querySelector('.session-card-header').addEventListener('click', () => toggleSessionExpand(session.id));
    const delBtn = card.querySelector(`[data-delete-session="${session.id}"]`);
    if (delBtn) delBtn.addEventListener('click', (e) => { e.stopPropagation(); deleteSession(session.id); });
  });
}

function buildSessionCardHTML(session) {
  const sets = getSessionSets(session.id);
  const exIds = [...new Set(sets.map(s => s.exerciseId))];
  const volume = computeTotalVolume(sets);
  const expanded = state.expandedSessionId === session.id;

  const exercises = getExercises();

  const expandedHTML = expanded ? `
    <div class="session-expand">
      <div class="session-expand-header">
        <span style="font-size:13px;color:var(--color-text-secondary);">${exIds.length} exercises &middot; ${sets.length} sets</span>
        <button class="btn btn-icon" style="background:var(--color-danger-subtle);color:var(--color-danger);border-radius:var(--radius-sm);" data-delete-session="${session.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </button>
      </div>
      ${exIds.map(eid => {
        const ex = exercises.find(e => e.id === eid);
        const exSets = sets.filter(s => s.exerciseId === eid);
        return `<div style="margin-bottom:14px;">
          <div style="font-weight:600;font-size:14px;margin-bottom:6px;display:flex;align-items:center;gap:8px;">
            ${ex ? ex.name : 'Unknown'}
            ${ex ? `<span class="tag" style="font-size:10px;">${ex.muscleGroup}</span>` : ''}
          </div>
          <table class="sets-table">
            <thead><tr><th>Set</th><th>Weight</th><th>Reps</th></tr></thead>
            <tbody>${exSets.map((s, i) => `<tr><td style="color:var(--color-text-tertiary);font-size:12px;">${i+1}</td><td>${s.weight}${s.unit}</td><td>${s.reps}</td></tr>`).join('')}</tbody>
          </table>
        </div>`;
      }).join('')}
    </div>` : '';

  return `<div class="session-card" data-session-card="${session.id}">
    <div class="session-card-header">
      <div>
        <div class="session-date">${formatDate(session.startedAt)}</div>
        <div class="session-meta" style="margin-top:3px;">${computeSessionDuration(session)}</div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.2s;${expanded ? 'transform:rotate(180deg)' : ''}"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
    <div class="stat-row" style="padding:0 16px;border-top:1px solid var(--color-border);border-bottom:${expanded ? '1px solid var(--color-border)' : 'none'};">
      <div class="stat-item"><div class="stat-value">${exIds.length}</div><div class="stat-label">Exercises</div></div>
      <div class="stat-item"><div class="stat-value">${sets.length}</div><div class="stat-label">Sets</div></div>
      <div class="stat-item"><div class="stat-value">${volume > 0 ? volume.toLocaleString() : '—'}</div><div class="stat-label">Vol (${sets[0]?.unit || 'kg'})</div></div>
    </div>
    ${expandedHTML}
  </div>`;
}

function toggleSessionExpand(sessionId) {
  state.expandedSessionId = state.expandedSessionId === sessionId ? null : sessionId;
  renderHistoryTab();
}

function deleteSession(sessionId) {
  const sessions = getSessions().filter(s => s.id !== sessionId);
  saveSessions(sessions);
  const sets = getSets().filter(s => s.sessionId !== sessionId);
  saveSets(sets);
  if (state.expandedSessionId === sessionId) state.expandedSessionId = null;
  showToast('Session deleted', 'info');
  renderHistoryTab();
}

/* ============================================================
   Section 8: Exercises Tab
   ============================================================ */

function renderExercisesTab() {
  const el = document.getElementById('tab-exercises');
  const exercises = getFilteredExercises();

  el.innerHTML = `
    <div class="page-header">
      <div class="page-title">Exercises</div>
      <button class="btn btn-accent-text btn-sm" id="btn-new-exercise">+ New</button>
    </div>
    <div style="padding:0 16px 12px;">
      <div class="search-wrap" style="margin-bottom:12px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input class="input" type="search" id="ex-search" placeholder="Search exercises…" value="${state.exerciseSearch}" autocomplete="off" />
      </div>
      <div class="chip-row" id="filter-chips">
        ${['All', ...MUSCLE_GROUPS].map(g => `<button class="chip${state.exerciseFilter === g ? ' active' : ''}" data-filter="${g}">${g}</button>`).join('')}
      </div>
    </div>
    <div style="padding:0 16px;" id="ex-list">
      ${exercises.length
        ? exercises.map(e => `
          <div class="ex-list-item" data-open-exercise="${e.id}">
            <div class="ex-list-name">${e.name}</div>
            <span class="tag">${e.muscleGroup}</span>
          </div>`).join('')
        : `<div class="empty-state" style="padding:40px 0;">
            <div class="empty-state-title">No exercises found</div>
            <div class="empty-state-sub">Try a different search or filter.</div>
          </div>`
      }
    </div>
  `;

  el.querySelector('#btn-new-exercise').addEventListener('click', () => openNewExerciseSheet(false));
  el.querySelector('#ex-search').addEventListener('input', e => {
    state.exerciseSearch = e.target.value;
    renderExercisesTab();
  });
  el.querySelectorAll('[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => { state.exerciseFilter = chip.dataset.filter; renderExercisesTab(); });
  });
  el.querySelectorAll('[data-open-exercise]').forEach(item => {
    item.addEventListener('click', () => openExerciseDetail(item.dataset.openExercise));
  });
}

function getFilteredExercises() {
  let list = getExercises();
  if (state.exerciseFilter !== 'All') list = list.filter(e => e.muscleGroup === state.exerciseFilter);
  if (state.exerciseSearch) {
    const q = state.exerciseSearch.toLowerCase();
    list = list.filter(e => e.name.toLowerCase().includes(q) || e.muscleGroup.toLowerCase().includes(q));
  }
  return list.sort((a, b) => a.name.localeCompare(b.name));
}

function openExerciseDetail(exerciseId) {
  const exercise = getExercises().find(e => e.id === exerciseId);
  if (!exercise) return;

  const progressData = getExerciseProgressData(exerciseId);
  const recentSessions = getSessions()
    .filter(s => s.finishedAt && getSets().some(st => st.sessionId === s.id && st.exerciseId === exerciseId))
    .sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt))
    .slice(0, 5);

  openSheet({
    title: exercise.name,
    headerExtra: `
      <button class="btn btn-icon" id="btn-edit-ex" style="width:36px;height:36px;" title="Edit">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </button>
      <button class="btn btn-icon" id="btn-del-ex" style="width:36px;height:36px;background:var(--color-danger-subtle);color:var(--color-danger);" title="Delete">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
      </button>`,
    renderFn: () => `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div>
          <div style="font-size:20px;font-weight:700;">${exercise.name}</div>
          <span class="tag" style="margin-top:4px;">${exercise.muscleGroup}</span>
        </div>
        <div style="display:flex;gap:6px;" id="ex-detail-actions"></div>
      </div>
      <div style="font-size:13px;font-weight:600;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">Weight Progression</div>
      ${progressData.data.length >= 2
        ? `<div class="chart-wrap"><canvas id="progress-chart"></canvas></div>`
        : `<div class="card" style="text-align:center;padding:20px;color:var(--color-text-secondary);font-size:13px;">Log at least 2 sessions to see your progress chart.</div>`
      }
      <div style="font-size:13px;font-weight:600;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.06em;margin:16px 0 8px;">Recent Sets</div>
      ${recentSessions.length
        ? recentSessions.map(sess => {
            const exSets = getSets().filter(s => s.sessionId === sess.id && s.exerciseId === exerciseId);
            return `<div style="margin-bottom:12px;">
              <div style="font-size:12px;color:var(--color-text-tertiary);margin-bottom:4px;">${formatDate(sess.startedAt)}</div>
              <table class="sets-table">
                <thead><tr><th>Set</th><th>Weight</th><th>Reps</th></tr></thead>
                <tbody>${exSets.map((s,i) => `<tr><td style="font-size:12px;color:var(--color-text-tertiary);">${i+1}</td><td>${s.weight}${s.unit}</td><td>${s.reps}</td></tr>`).join('')}</tbody>
              </table>
            </div>`;
          }).join('')
        : `<div style="color:var(--color-text-secondary);font-size:14px;">No sets logged yet.</div>`
      }
    `,
    onOpen: () => {
      const actionsEl = document.getElementById('ex-detail-actions');
      if (actionsEl) {
        actionsEl.innerHTML = `
          <button class="btn btn-icon" id="btn-edit-ex" style="width:36px;height:36px;" title="Edit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn btn-icon" id="btn-del-ex" style="width:36px;height:36px;background:var(--color-danger-subtle);color:var(--color-danger);" title="Delete">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>`;
        document.getElementById('btn-edit-ex').addEventListener('click', () => {
          closeSheet();
          setTimeout(() => openEditExerciseSheet(exerciseId), 320);
        });
        document.getElementById('btn-del-ex').addEventListener('click', () => {
          if (confirm(`Delete "${exercise.name}"? This will also remove all logged sets for this exercise.`)) {
            closeSheet();
            deleteExercise(exerciseId);
          }
        });
      }

      if (progressData.data.length >= 2) {
        const canvas = document.getElementById('progress-chart');
        if (canvas) {
          if (state.progressChart) { state.progressChart.destroy(); state.progressChart = null; }
          state.progressChart = new Chart(canvas, {
            type: 'line',
            data: {
              labels: progressData.labels,
              datasets: [{
                data: progressData.data,
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34,197,94,0.1)',
                pointBackgroundColor: '#22c55e',
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.3,
                fill: true,
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { callbacks: {
                label: ctx => ` ${ctx.parsed.y}${getSettings().defaultUnit}`
              }}},
              scales: {
                x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#888', font: { size: 11 } } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#888', font: { size: 11 } }, beginAtZero: false },
              }
            }
          });
        }
      }
    },
  });
}

function openNewExerciseSheet(returnToAddSheet) {
  openSheet({
    title: 'New Exercise',
    renderFn: () => `
      <div class="form-group">
        <label class="form-label">Exercise Name</label>
        <input class="input" type="text" id="new-ex-name" placeholder="e.g. Barbell Squat" autocomplete="off" />
      </div>
      <div class="form-group">
        <label class="form-label">Muscle Group</label>
        <select class="select" id="new-ex-group">
          ${MUSCLE_GROUPS.map(g => `<option value="${g}">${g}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;gap:8px;margin-top:6px;">
        <button class="btn btn-ghost" id="btn-cancel-new-ex" style="flex:1;">Cancel</button>
        <button class="btn btn-primary" id="btn-save-new-ex" style="flex:2;">Save Exercise</button>
      </div>
    `,
    onOpen: () => {
      document.getElementById('new-ex-name').focus();
      document.getElementById('btn-cancel-new-ex').addEventListener('click', closeSheet);
      document.getElementById('btn-save-new-ex').addEventListener('click', () => {
        const name  = document.getElementById('new-ex-name').value.trim();
        const group = document.getElementById('new-ex-group').value;
        const err = validateExerciseName(name, null);
        if (err) { showToast(err, 'error'); return; }
        saveExercise(null, name, group);
        closeSheet();
        if (returnToAddSheet) setTimeout(openAddExerciseSheet, 320);
        else renderExercisesTab();
      });
    },
  });
}

function openEditExerciseSheet(exerciseId) {
  const exercise = getExercises().find(e => e.id === exerciseId);
  if (!exercise) return;
  openSheet({
    title: 'Edit Exercise',
    renderFn: () => `
      <div class="form-group">
        <label class="form-label">Exercise Name</label>
        <input class="input" type="text" id="edit-ex-name" value="${exercise.name}" autocomplete="off" />
      </div>
      <div class="form-group">
        <label class="form-label">Muscle Group</label>
        <select class="select" id="edit-ex-group">
          ${MUSCLE_GROUPS.map(g => `<option value="${g}"${g === exercise.muscleGroup ? ' selected' : ''}>${g}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;gap:8px;margin-top:6px;">
        <button class="btn btn-ghost" id="btn-cancel-edit" style="flex:1;">Cancel</button>
        <button class="btn btn-primary" id="btn-save-edit" style="flex:2;">Save Changes</button>
      </div>
    `,
    onOpen: () => {
      document.getElementById('btn-cancel-edit').addEventListener('click', closeSheet);
      document.getElementById('btn-save-edit').addEventListener('click', () => {
        const name  = document.getElementById('edit-ex-name').value.trim();
        const group = document.getElementById('edit-ex-group').value;
        const err = validateExerciseName(name, exerciseId);
        if (err) { showToast(err, 'error'); return; }
        saveExercise(exerciseId, name, group);
        closeSheet();
        renderExercisesTab();
      });
    },
  });
}

function validateExerciseName(name, excludeId) {
  if (!name) return 'Exercise name is required.';
  const exists = getExercises().some(e => e.id !== excludeId && e.name.toLowerCase() === name.toLowerCase());
  if (exists) return 'An exercise with this name already exists.';
  return null;
}

function saveExercise(id, name, muscleGroup) {
  const exercises = getExercises();
  if (id) {
    const idx = exercises.findIndex(e => e.id === id);
    if (idx !== -1) { exercises[idx].name = name; exercises[idx].muscleGroup = muscleGroup; }
  } else {
    exercises.push({ id: generateId('ex'), name, muscleGroup, createdAt: new Date().toISOString() });
  }
  saveExercises(exercises);
  showToast(id ? 'Exercise updated' : 'Exercise added', 'success');
}

function deleteExercise(exerciseId) {
  saveExercises(getExercises().filter(e => e.id !== exerciseId));
  saveSets(getSets().filter(s => s.exerciseId !== exerciseId));
  showToast('Exercise deleted', 'info');
  renderExercisesTab();
}

/* ============================================================
   Section 9: Settings Tab
   ============================================================ */

function renderSettingsTab() {
  const el = document.getElementById('tab-settings');
  const settings = getSettings();

  el.innerHTML = `
    <div class="page-header"><div class="page-title">Settings</div></div>
    <div style="padding:0 16px;">

      <div class="settings-section">
        <div class="settings-label">Preferences</div>
        <div class="settings-card">
          <div class="settings-row" style="cursor:default;">
            <span class="settings-row-label">Weight Unit</span>
            <div class="segmented">
              <button class="seg-btn${settings.defaultUnit === 'kg' ? ' active' : ''}" data-unit="kg">kg</button>
              <button class="seg-btn${settings.defaultUnit === 'lbs' ? ' active' : ''}" data-unit="lbs">lbs</button>
            </div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-label">Data</div>
        <div class="settings-card">
          <div class="settings-row" id="btn-export">
            <span class="settings-row-label">Export Data</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </div>
          <div class="settings-row" id="btn-import">
            <span class="settings-row-label">Import Data</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
        </div>
        <input type="file" id="import-file-input" accept=".json" style="display:none;" />
      </div>

      <div class="settings-section">
        <div class="settings-label">Danger Zone</div>
        <div class="settings-card danger-card">
          <div class="settings-row" id="btn-clear">
            <span class="settings-row-label danger">Clear All Data</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-danger)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-label">About</div>
        <div class="settings-card">
          <div class="settings-row" style="cursor:default;">
            <span class="settings-row-label">Liftr</span>
            <span style="font-size:13px;color:var(--color-text-secondary);">v${VERSION}</span>
          </div>
        </div>
      </div>

    </div>
  `;

  el.querySelectorAll('[data-unit]').forEach(btn => {
    btn.addEventListener('click', () => { toggleUnit(btn.dataset.unit); renderSettingsTab(); });
  });
  el.querySelector('#btn-export').addEventListener('click', handleExport);
  el.querySelector('#btn-import').addEventListener('click', () => el.querySelector('#import-file-input').click());
  el.querySelector('#import-file-input').addEventListener('change', e => {
    if (e.target.files[0]) handleImport(e.target.files[0]);
    e.target.value = '';
  });
  el.querySelector('#btn-clear').addEventListener('click', handleClearData);
}

function toggleUnit(unit) {
  const s = getSettings(); s.defaultUnit = unit; saveSettings(s);
}

function handleExport() {
  const data = {
    exercises: getExercises(),
    sessions: getSessions(),
    sets: getSets(),
    settings: getSettings(),
    exportedAt: new Date().toISOString(),
    version: VERSION,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'liftr-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data exported', 'success');
}

function handleImport(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data.exercises) || !Array.isArray(data.sessions) || !Array.isArray(data.sets)) {
        showToast('Invalid backup file format', 'error');
        return;
      }
      openSheet({
        title: 'Import Data',
        renderFn: () => `
          <div style="color:var(--color-text-secondary);font-size:14px;margin-bottom:20px;line-height:1.7;">
            This will <strong style="color:var(--color-danger);">replace all existing data</strong> with the backup containing:
            <br><br>
            <strong>${data.exercises.length}</strong> exercises &middot;
            <strong>${data.sessions.length}</strong> sessions &middot;
            <strong>${data.sets.length}</strong> sets
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-ghost" id="btn-cancel-import" style="flex:1;">Cancel</button>
            <button class="btn btn-danger" id="btn-confirm-import" style="flex:2;">Replace & Import</button>
          </div>
        `,
        onOpen: () => {
          document.getElementById('btn-cancel-import').addEventListener('click', closeSheet);
          document.getElementById('btn-confirm-import').addEventListener('click', () => {
            saveExercises(data.exercises);
            saveSessions(data.sessions);
            saveSets(data.sets);
            if (data.settings) saveSettings(data.settings);
            closeSheet();
            showToast('Data imported successfully', 'success');
            renderSettingsTab();
          });
        },
      });
    } catch {
      showToast('Could not read backup file', 'error');
    }
  };
  reader.readAsText(file);
}

function handleClearData() {
  openSheet({
    title: 'Clear All Data',
    renderFn: () => `
      <div style="color:var(--color-text-secondary);font-size:14px;margin-bottom:16px;line-height:1.7;">
        This will permanently delete all your sessions, sets, and exercises. This cannot be undone.
      </div>
      <div class="form-group">
        <label class="form-label">Type <strong style="color:var(--color-danger);">DELETE</strong> to confirm</label>
        <input class="input" type="text" id="clear-confirm-input" placeholder="DELETE" autocomplete="off" />
      </div>
      <div style="display:flex;gap:8px;margin-top:6px;">
        <button class="btn btn-ghost" id="btn-cancel-clear" style="flex:1;">Cancel</button>
        <button class="btn btn-danger" id="btn-confirm-clear" style="flex:2;" disabled>Clear Everything</button>
      </div>
    `,
    onOpen: () => {
      const input = document.getElementById('clear-confirm-input');
      const confirmBtn = document.getElementById('btn-confirm-clear');
      input.addEventListener('input', () => {
        confirmBtn.disabled = input.value !== 'DELETE';
        confirmBtn.style.opacity = input.value === 'DELETE' ? '1' : '0.4';
      });
      document.getElementById('btn-cancel-clear').addEventListener('click', closeSheet);
      confirmBtn.addEventListener('click', () => {
        Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
        window._sessionExercises = {};
        state.activeSessionId = null;
        state.expandedSessionId = null;
        stopTimer();
        closeSheet();
        showToast('All data cleared', 'info');
        seedDefaultExercises();
        renderSettingsTab();
      });
    },
  });
}

/* ============================================================
   Section 10: Sheet System
   ============================================================ */

let _sheetConfig = null;

function openSheet(config) {
  _sheetConfig = config;
  const content = document.getElementById('sheet-content');
  const overlay = document.getElementById('sheet-overlay');

  content.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0 16px;">
      <div style="font-size:18px;font-weight:700;">${config.title || ''}</div>
    </div>
    ${config.renderFn ? config.renderFn() : ''}
  `;

  overlay.classList.add('open');
  state.sheetOpen = true;
  if (config.onOpen) setTimeout(config.onOpen, 50);
}

function closeSheet() {
  const overlay = document.getElementById('sheet-overlay');
  overlay.classList.remove('open');
  state.sheetOpen = false;
  if (_sheetConfig?.onClose) _sheetConfig.onClose();
  _sheetConfig = null;
}

function initSheetDismiss() {
  const overlay = document.getElementById('sheet-overlay');
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeSheet();
  });
}

/* ============================================================
   Section 11: Toast System
   ============================================================ */

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<div class="toast-dot"></div>${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 280);
  }, 3000);
}

/* ============================================================
   Section 12: Default Data & Init
   ============================================================ */

function seedDefaultExercises() {
  if (!getExercises().length) {
    saveExercises(DEFAULT_EXERCISES.map(e => ({
      id: generateId('ex'),
      name: e.name,
      muscleGroup: e.muscleGroup,
      createdAt: new Date().toISOString(),
    })));
  }
}

function init() {
  seedDefaultExercises();

  // Restore active session
  const activeId = getActiveSessionId();
  if (activeId) {
    const session = getSessions().find(s => s.id === activeId && !s.finishedAt);
    if (session) { state.activeSessionId = activeId; }
    else { clearActiveSession(); }
  }

  initNavigation();
  initSheetDismiss();

  // Override getSessionExerciseIds globally to include pending
  window._sessionExercises = window._sessionExercises || {};

  // Patch renderTodayTab to use extended exercise ids
  const _originalRenderActiveSession = renderActiveSession;
  window.renderActiveSession = function(el) {
    const session = getSessions().find(s => s.id === state.activeSessionId);
    if (!session) { clearActiveSession(); state.activeSessionId = null; renderIdleState(el); return; }
    const exIds = getSessionExerciseIdsWithPending(state.activeSessionId);

    el.innerHTML = `
      <div id="session-header">
        <div id="session-timer">00:00</div>
        <div id="finish-area">
          ${state.confirmingFinish
            ? `<div class="confirm-finish">
                 <button class="btn btn-ghost btn-sm" id="btn-cancel-finish">Cancel</button>
                 <button class="btn btn-danger btn-sm" id="btn-confirm-finish">Confirm Finish</button>
               </div>`
            : `<button class="btn btn-danger btn-sm" id="btn-finish">Finish</button>`
          }
        </div>
      </div>
      <div id="session-body" style="padding:14px 16px 8px;">
        ${exIds.map(eid => renderExerciseCard(eid)).join('')}
        <button class="btn btn-secondary btn-full" id="btn-add-exercise" style="margin-top:4px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Exercise
        </button>
      </div>
    `;

    updateTimerDisplay();
    startTimer();

    if (state.confirmingFinish) {
      el.querySelector('#btn-cancel-finish').addEventListener('click', () => { state.confirmingFinish = false; renderTodayTab(); });
      el.querySelector('#btn-confirm-finish').addEventListener('click', finishSession);
    } else {
      el.querySelector('#btn-finish').addEventListener('click', () => { state.confirmingFinish = true; renderTodayTab(); });
    }

    el.querySelector('#btn-add-exercise').addEventListener('click', openAddExerciseSheet);

    exIds.forEach(eid => {
      const logBtn = el.querySelector(`[data-log-exercise="${eid}"]`);
      if (logBtn) logBtn.addEventListener('click', () => logSet(eid));
      const wMinus = el.querySelector(`[data-weight-minus="${eid}"]`);
      const wPlus  = el.querySelector(`[data-weight-plus="${eid}"]`);
      const rMinus = el.querySelector(`[data-reps-minus="${eid}"]`);
      const rPlus  = el.querySelector(`[data-reps-plus="${eid}"]`);
      if (wMinus) wMinus.addEventListener('click', () => stepField(el.querySelector(`[data-weight-input="${eid}"]`), -stepWeight(), 0, 999));
      if (wPlus)  wPlus.addEventListener('click',  () => stepField(el.querySelector(`[data-weight-input="${eid}"]`), +stepWeight(), 0, 999));
      if (rMinus) rMinus.addEventListener('click', () => stepField(el.querySelector(`[data-reps-input="${eid}"]`), -1, 1, 100));
      if (rPlus)  rPlus.addEventListener('click',  () => stepField(el.querySelector(`[data-reps-input="${eid}"]`), +1, 1, 100));
    });
  };

  renderTodayTab();

  if (state.activeSessionId) startTimer();
}

// Patch renderTodayTab to use window.renderActiveSession when available
const _baseRenderTodayTab = renderTodayTab;
function renderTodayTab() {
  const el = document.getElementById('tab-today');
  state.activeSessionId = getActiveSessionId();
  if (state.activeSessionId) {
    (window.renderActiveSession || renderActiveSession)(el);
  } else {
    renderIdleState(el);
  }
}

document.addEventListener('DOMContentLoaded', init);
