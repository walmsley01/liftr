/* ============================================================
   Section 1: Programme Data
   ============================================================ */

const PROGRAMME = [
  {
    day: 1, name: 'Push',
    exercises: [
      { id:'p1', name:'Incline dumbbell press',    sets:4, repsMin:6,  repsMax:8,  repsDisplay:'6–8',      muscle:'Upper chest',          notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'p2', name:'Barbell shoulder press',    sets:3, repsMin:8,  repsMax:10, repsDisplay:'8–10',     muscle:'Front delts',           notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'p3', name:'Close-grip push-up',        sets:3, repsMin:12, repsMax:15, repsDisplay:'12–15',    muscle:'Chest / triceps',       notes:'Controlled – stop short of shoulder grind',                    increment:0,   trackWeight:false, perSide:false, repsUnit:'reps' },
      { id:'p4', name:'Cable lateral raise',       sets:3, repsMin:15, repsMax:20, repsDisplay:'15–20',    muscle:'Side delts',            notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'p5', name:'Tricep rope pushdown',      sets:3, repsMin:12, repsMax:15, repsDisplay:'12–15',    muscle:'Triceps',               notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'p6', name:'Overhead tricep extension', sets:2, repsMin:15, repsMax:15, repsDisplay:'15',       muscle:'Triceps long head',     notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
    ]
  },
  {
    day: 2, name: 'Pull',
    exercises: [
      { id:'pu1', name:'Pull-ups',                    sets:4, repsMin:6,  repsMax:8,  repsDisplay:'6–8',      muscle:'Lats',                  notes:'Full ROM – assisted if needed to hit reps cleanly',            increment:0,   trackWeight:false, perSide:false, repsUnit:'reps' },
      { id:'pu2', name:'Seated cable row',             sets:4, repsMin:8,  repsMax:10, repsDisplay:'8–10',     muscle:'Mid back / rhomboids',  notes:'Neutral grip – drive elbows back – pause at contraction',      increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'pu3', name:'Meadows row',                  sets:3, repsMin:10, repsMax:12, repsDisplay:'10–12 ea', muscle:'Lats / mid back',       notes:'Landmine unilateral – keep chest tall – avoid hip rotation',   increment:2.5, trackWeight:true,  perSide:true,  repsUnit:'reps' },
      { id:'pu4', name:'Face pulls',                   sets:3, repsMin:15, repsMax:20, repsDisplay:'15–20',    muscle:'Rear delts',            notes:'Rope to forehead – elbows high',                               increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'pu5', name:'Incline curl',                 sets:3, repsMin:12, repsMax:12, repsDisplay:'12',       muscle:'Biceps long head',      notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'pu6', name:'Hammer curl',                  sets:2, repsMin:12, repsMax:12, repsDisplay:'12',       muscle:'Brachialis / forearm',  notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
    ]
  },
  {
    day: 3, name: 'Legs',
    exercises: [
      { id:'l1', name:'Hip thrust',                sets:4, repsMin:10, repsMax:12, repsDisplay:'10–12',    muscle:'Glutes',                notes:'Load progressively – drive through heel – full hip extension at top', increment:5,   trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'l2', name:'Bulgarian split squat',     sets:3, repsMin:8,  repsMax:10, repsDisplay:'8–10 ea',  muscle:'Quads / glutes',        notes:'Watch right hip drop – keep pelvis level throughout',                increment:2.5, trackWeight:true,  perSide:true,  repsUnit:'reps' },
      { id:'l3', name:'Romanian deadlift',         sets:3, repsMin:10, repsMax:12, repsDisplay:'10–12',    muscle:'Hamstrings / glutes',   notes:'',                                                                   increment:5,   trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'l4', name:'Banded clamshell',          sets:3, repsMin:20, repsMax:20, repsDisplay:'20 ea',    muscle:'Glute med',             notes:'Key for hip stability on run',                                       increment:0,   trackWeight:false, perSide:true,  repsUnit:'reps' },
      { id:'l5', name:'Nordic curl',               sets:3, repsMin:10, repsMax:12, repsDisplay:'10–12',    muscle:'Hamstrings',            notes:'Hamstring resilience for running load',                              increment:0,   trackWeight:false, perSide:false, repsUnit:'reps' },
      { id:'l6', name:'Single-leg calf raise',     sets:3, repsMin:15, repsMax:15, repsDisplay:'15 ea',    muscle:'Calves',                notes:'',                                                                   increment:0,   trackWeight:false, perSide:true,  repsUnit:'reps' },
    ]
  },
  {
    day: 4, name: 'Full Body',
    exercises: [
      { id:'fb1', name:'Conventional deadlift', sets:3, repsMin:5,  repsMax:5,  repsDisplay:'5',        muscle:'Posterior chain',       notes:'Heavy but controlled – 5 rep strength work',                  increment:5,   trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'fb2', name:'Barbell bench press',   sets:3, repsMin:10, repsMax:10, repsDisplay:'10',       muscle:'Chest',                 notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'fb3', name:'Seated cable row',      sets:3, repsMin:12, repsMax:12, repsDisplay:'12',       muscle:'Back',                  notes:'',                                                              increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'fb4', name:'Step-ups',              sets:3, repsMin:10, repsMax:10, repsDisplay:'10 ea',    muscle:'Quads / glutes',        notes:'Control the descent',                                          increment:2.5, trackWeight:true,  perSide:true,  repsUnit:'reps' },
      { id:'fb5', name:'Copenhagen plank',      sets:3, repsMin:20, repsMax:30, repsDisplay:'20–30s ea',muscle:'Adductors / core',      notes:'Start with bottom knee on ground if needed',                   increment:0,   trackWeight:false, perSide:true,  repsUnit:'secs' },
      { id:'fb6', name:'Dead bug',              sets:3, repsMin:10, repsMax:10, repsDisplay:'10 ea',    muscle:'Deep core',             notes:'Slow and controlled – no lower back arch',                     increment:0,   trackWeight:false, perSide:true,  repsUnit:'reps' },
      { id:'fb7', name:"Farmer's carry",        sets:3, repsMin:1,  repsMax:1,  repsDisplay:'30m',      muscle:'Full body / grip',      notes:'Heavy dumbbells – tall posture',                               increment:2.5, trackWeight:true,  perSide:false, repsUnit:'dist' },
    ]
  },
];

/* ============================================================
   Section 2: Storage
   ============================================================ */

const KEYS = { logs: 'lt_logs', settings: 'lt_settings', draft: 'lt_draft', prs: 'lt_prs' };

const store = {
  get(k)      { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v)   { localStorage.setItem(k, JSON.stringify(v)); },
  remove(k)   { localStorage.removeItem(k); },
};

function getLogs()         { return store.get(KEYS.logs)     || []; }
function saveLogs(a)       { store.set(KEYS.logs, a); }
function getSettings()     { return Object.assign({ unit: 'kg', restDuration: 120 }, store.get(KEYS.settings) || {}); }
function saveSettings(o)   { store.set(KEYS.settings, o); }
function getDraft()        { return store.get(KEYS.draft); }
function saveDraft(d)      { store.set(KEYS.draft, d); }
function clearDraft()      { store.remove(KEYS.draft); }
function getPRs()          { return store.get(KEYS.prs) || {}; }
function savePRs(o)        { store.set(KEYS.prs, o); }

/* ============================================================
   Section 3: Progression Logic
   ============================================================ */

function findExercise(id) {
  for (const day of PROGRAMME)
    for (const ex of day.exercises)
      if (ex.id === id) return ex;
  return null;
}

function findDay(n) { return PROGRAMME.find(d => d.day === n); }

function getSuggestedWeight(exerciseId) {
  const ex = findExercise(exerciseId);
  if (!ex || !ex.trackWeight) return null;

  const relevant = getLogs()
    .filter(l => l.sets.some(s => s.exerciseId === exerciseId))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!relevant.length) return { weight: null, increased: false, fromWeight: null };

  const lastLog  = relevant[0];
  const lastSets = lastLog.sets.filter(s => s.exerciseId === exerciseId);
  if (!lastSets.length) return { weight: null, increased: false, fromWeight: null };

  const lastWeight = lastSets[lastSets.length - 1].weight;

  const allHitMax = ex.repsUnit === 'dist'
    ? lastSets.length >= ex.sets
    : (lastSets.length >= ex.sets && lastSets.every(s => s.reps >= ex.repsMax));

  const newWeight = allHitMax ? lastWeight + ex.increment : lastWeight;
  return { weight: newWeight, increased: allHitMax, fromWeight: lastWeight };
}

function getLastSetReps(exerciseId, setIndex) {
  const relevant = getLogs()
    .filter(l => l.sets.some(s => s.exerciseId === exerciseId))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  if (!relevant.length) return null;
  const s = relevant[0].sets.find(s => s.exerciseId === exerciseId && s.setIndex === setIndex);
  return s ? s.reps : null;
}

/* ============================================================
   Section 4: PR System
   ============================================================ */

function getExercisePR(exId) {
  return getPRs()[exId]?.weight ?? null;
}

function checkAndRecordPR(exId, weight) {
  const ex = findExercise(exId);
  if (!ex || !ex.trackWeight || !weight) return false;
  const prs = getPRs();
  const current = prs[exId]?.weight ?? null;
  if (current === null || weight > current) {
    prs[exId] = { weight, date: new Date().toISOString() };
    savePRs(prs);
    showPRToast(ex.name, weight);
    return true;
  }
  return false;
}

function showPRToast(name, weight) {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast pr';
  t.innerHTML = `<div class="toast-dot"></div>PR — ${name} · ${weight}${getSettings().unit}`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 280); }, 4000);
}

function rebuildPRsFromLogs() {
  const prs = {};
  const logs = getLogs().sort((a, b) => new Date(a.date) - new Date(b.date));
  for (const log of logs) {
    for (const s of log.sets) {
      const ex = findExercise(s.exerciseId);
      if (!ex || !ex.trackWeight || !s.weight) continue;
      if (!prs[s.exerciseId] || s.weight > prs[s.exerciseId].weight) {
        prs[s.exerciseId] = { weight: s.weight, date: log.date };
      }
    }
  }
  savePRs(prs);
}

/* ============================================================
   Section 5: Rest Timer
   ============================================================ */

const timer = { id: null, remaining: 0, targetExId: null };

function startRestTimer(exId) {
  clearRestTimer();
  const duration = getSettings().restDuration;
  timer.remaining = duration;
  timer.targetExId = exId;

  const panel = document.getElementById(`ex-panel-${exId}`);
  if (!panel) return;
  const setsArea = panel.querySelector('.sets-area');
  if (!setsArea) return;

  const pill = document.createElement('div');
  pill.id = 'rest-timer-pill';
  pill.className = 'rest-timer-pill';
  const circumference = 75.4;
  pill.innerHTML = `
    <svg class="timer-ring" width="32" height="32" viewBox="0 0 32 32">
      <circle class="timer-ring-track" cx="16" cy="16" r="12" />
      <circle class="timer-ring-progress" id="timer-ring-progress" cx="16" cy="16" r="12"
        stroke-dasharray="${circumference}" stroke-dashoffset="0" />
    </svg>
    <span class="timer-seconds" id="timer-seconds">${duration}</span>
    <span class="timer-label">rest</span>
    <button class="timer-dismiss" data-action="dismiss-timer">×</button>`;
  setsArea.insertBefore(pill, setsArea.firstChild);

  timer.id = setInterval(tickRestTimer, 1000);
}

function tickRestTimer() {
  timer.remaining--;
  const secEl = document.getElementById('timer-seconds');
  const ringEl = document.getElementById('timer-ring-progress');
  const pill   = document.getElementById('rest-timer-pill');

  if (!secEl || !pill) { clearInterval(timer.id); timer.id = null; return; }

  if (timer.remaining <= 0) {
    clearInterval(timer.id); timer.id = null;
    secEl.textContent = '0';
    if (ringEl) ringEl.style.strokeDashoffset = '75.4';
    pill.classList.add('timer-pulse');
    setTimeout(() => { pill.remove(); }, 2000);
    return;
  }

  secEl.textContent = timer.remaining;
  if (ringEl) {
    const duration = getSettings().restDuration;
    const offset = 75.4 * (1 - timer.remaining / duration);
    ringEl.style.strokeDashoffset = offset;
  }
}

function clearRestTimer() {
  if (timer.id) { clearInterval(timer.id); timer.id = null; }
  document.getElementById('rest-timer-pill')?.remove();
  timer.remaining = 0;
  timer.targetExId = null;
}

/* ============================================================
   Section 6: Plate Calculator
   ============================================================ */

const BARBELL_KG       = 20;
const PLATE_SIZES_KG   = [20, 15, 10, 5, 2.5, 1.25];
const BARBELL_LBS      = 45;
const PLATE_SIZES_LBS  = [45, 35, 25, 10, 5, 2.5];
const BARBELL_REGEX    = /barbell|deadlift|squat|bench press/i;

function isBarbellExercise(name) { return BARBELL_REGEX.test(name); }

function calcPlates(totalWeight, unit) {
  const barWeight  = unit === 'lbs' ? BARBELL_LBS : BARBELL_KG;
  const plateSizes = unit === 'lbs' ? PLATE_SIZES_LBS : PLATE_SIZES_KG;
  let remaining = (totalWeight - barWeight) / 2;
  if (remaining < 0) return null;
  const result = [];
  for (const size of plateSizes) {
    const count = Math.floor(remaining / size + 0.001);
    if (count > 0) {
      result.push({ plate: size, count });
      remaining = Math.round((remaining - count * size) * 1000) / 1000;
    }
  }
  if (remaining > 0.01) return null;
  return result;
}

function openPlateCalculator(exId) {
  const ex = findExercise(exId);
  if (!ex) return;
  const weight = state.draft?.exercises[exId]?.weight ?? 0;
  state.plateCalcWeight = weight;
  state.plateCalcExId   = exId;
  const unit = getSettings().unit;
  openSheet({
    title: `Plate Calculator`,
    html: `
      <div style="font-size:13px;color:var(--text-2);margin-bottom:4px;">${ex.name}</div>
      <div class="plate-calc-controls">
        <button class="step-btn" style="width:48px;height:48px;" data-action="plate-minus">−</button>
        <div class="plate-target-weight" id="plate-target-weight">${weight}${unit}</div>
        <button class="step-btn" style="width:48px;height:48px;" data-action="plate-plus">+</button>
      </div>
      <div id="plate-calc-body">${renderPlateCalcContent(weight, unit)}</div>
      <button class="btn-primary-full" style="margin-top:16px;" data-action="use-plate-weight">Use this weight</button>`,
    onOpen: () => {},
  });
}

function renderPlateCalcContent(weight, unit) {
  const barWeight = unit === 'lbs' ? BARBELL_LBS : BARBELL_KG;
  const plates = calcPlates(weight, unit);
  if (weight < barWeight) {
    return `<div style="color:var(--text-3);font-size:14px;padding:12px 0;">Weight is below bar weight (${barWeight}${unit}).</div>`;
  }
  if (!plates) {
    return `<div style="color:var(--text-3);font-size:14px;padding:12px 0;">Can't make this weight with standard plates.</div>`;
  }
  if (plates.length === 0) {
    return `<div style="font-size:14px;padding:12px 0;color:var(--text-2);">Bar only — ${barWeight}${unit}</div>`;
  }
  const rows = plates.map(p =>
    `<div class="plate-breakdown-row">
      <span>${p.plate}${unit} plate</span>
      <span style="font-weight:700;">× ${p.count} per side</span>
    </div>`
  ).join('');
  return `<div style="font-size:12px;color:var(--text-3);margin-bottom:6px;">Bar: ${barWeight}${unit} + plates each side:</div>${rows}`;
}

/* ============================================================
   Section 7: State
   ============================================================ */

const state = {
  view: 'workouts',
  draft: null,
  expandedLog: null,
  sessionPRs: [],
  chartInstance: null,
  plateCalcWeight: 0,
  plateCalcExId: null,
  completionTimeout: null,
};

/* ============================================================
   Section 8: Router & Navigation
   ============================================================ */

function navigate(view, dayNum) {
  // Cancel completion screen if navigating away early
  if (state.completionTimeout) {
    clearTimeout(state.completionTimeout);
    state.completionTimeout = null;
    document.getElementById('completion-overlay')?.remove();
  }

  state.view = view;

  const topbar = document.getElementById('workout-topbar');
  const nav    = document.getElementById('bottom-nav');
  const mc     = document.getElementById('main-content');

  if (view === 'workout') {
    topbar.classList.remove('hidden');
    nav.classList.add('hidden');
    mc.classList.add('workout-mode');
    mc.classList.remove('normal-mode');
    renderWorkout(dayNum);
  } else {
    topbar.classList.add('hidden');
    nav.classList.remove('hidden');
    mc.classList.remove('workout-mode');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.nav === view));
    if (view === 'workouts') renderHome();
    if (view === 'history')  renderHistory();
    if (view === 'settings') renderSettings();
  }

  document.getElementById('main-content').scrollTop = 0;
}

/* ============================================================
   Section 9: Home View
   ============================================================ */

function renderHome() {
  const mc = document.getElementById('main-content');
  const draft = getDraft();

  let resumeHTML = '';
  if (draft) {
    state.draft = draft;
    const day = findDay(draft.day);
    const doneCount = Object.values(draft.exercises)
      .reduce((n, ex) => n + ex.sets.filter(s => s !== null).length, 0);
    resumeHTML = `
      <div class="resume-banner">
        <div>
          <div class="resume-banner-label">${day ? day.name : 'Workout'} in progress</div>
          <div class="resume-banner-sub">${doneCount} set${doneCount !== 1 ? 's' : ''} logged so far</div>
        </div>
        <div class="resume-banner-actions">
          <button class="btn-ghost" style="padding:8px 12px;font-size:13px;" data-action="discard-draft">Discard</button>
          <button class="btn-primary-full" style="width:auto;padding:9px 16px;font-size:13px;" data-action="resume-draft">Resume</button>
        </div>
      </div>`;
  }

  mc.innerHTML = `
    <div class="page-header">
      <div class="page-title">Liftr</div>
      <div class="page-sub">Choose your workout</div>
    </div>
    ${resumeHTML}
    ${PROGRAMME.map(day => buildDayCard(day)).join('')}
    <div style="height:8px;"></div>
  `;
}

function getLastWeightsForDay(day, lastLog) {
  if (!lastLog) return '';
  const tracked = day.exercises.filter(e => e.trackWeight).slice(0, 3);
  const items = tracked.map(ex => {
    const s = lastLog.sets.filter(s => s.exerciseId === ex.id);
    if (!s.length) return null;
    const w = s[s.length - 1].weight;
    const shortName = ex.name.split(' ').slice(0, 2).join(' ');
    return `<span class="last-weights-item">${shortName} · ${w}${getSettings().unit}</span>`;
  }).filter(Boolean);
  if (!items.length) return '';
  return `<div class="last-weights-row">${items.join('')}</div>`;
}

function checkLogForPRBadge(log) {
  if (!log) return false;
  const prs = getPRs();
  const logDay = new Date(log.date).toDateString();
  return Object.values(prs).some(pr => new Date(pr.date).toDateString() === logDay);
}

function buildDayCard(day) {
  const lastLog    = getLastLogForDay(day.day);
  const daysAgoText = lastLog ? daysAgoLabel(lastLog.date) : null;
  const isRecent   = lastLog && daysSince(lastLog.date) <= 7;
  const preview    = day.exercises.slice(0, 3).map(e => e.name).join(', ')
    + (day.exercises.length > 3 ? ` +${day.exercises.length - 3} more` : '');
  const hasPR      = checkLogForPRBadge(lastLog);
  const weightsHTML = getLastWeightsForDay(day, lastLog);

  return `
    <div class="day-card" data-action="start-day" data-day="${day.day}">
      <div class="day-card-top">
        <div>
          <div class="day-label">Day ${day.day}</div>
          <div class="day-name">${day.name}</div>
        </div>
        <div class="day-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
      <div class="day-exercises-preview">${preview}</div>
      ${weightsHTML}
      <div class="day-card-footer">
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="day-count">${day.exercises.length} exercises</span>
          ${hasPR ? '<span class="pr-badge">PR</span>' : ''}
        </div>
        <div class="last-done">
          <div class="last-done-dot${isRecent ? ' recent' : ''}"></div>
          <span>${daysAgoText || 'Never done'}</span>
        </div>
      </div>
    </div>`;
}

function getLastLogForDay(dayNum) {
  const logs = getLogs().filter(l => l.day === dayNum).sort((a,b) => new Date(b.date) - new Date(a.date));
  return logs[0] || null;
}

function daysSince(iso) {
  return Math.floor((Date.now() - new Date(iso)) / 86400000);
}

function daysAgoLabel(iso) {
  const d = daysSince(iso);
  if (d === 0) return 'Done today';
  if (d === 1) return 'Done yesterday';
  return `Done ${d} days ago`;
}

/* ============================================================
   Section 10: Workout View
   ============================================================ */

function initDraft(dayNum) {
  const day = findDay(dayNum);
  if (!day) return;
  const exercises = {};
  day.exercises.forEach(ex => {
    const suggestion = getSuggestedWeight(ex.id);
    exercises[ex.id] = {
      weight: suggestion ? suggestion.weight : null,
      sets: Array(ex.sets).fill(null),
    };
  });
  state.draft = { day: dayNum, date: new Date().toISOString(), startedAt: new Date().toISOString(), exercises };
  state.sessionPRs = [];
  saveDraft(state.draft);
}

function renderWorkout(dayNum) {
  const day = findDay(dayNum);
  if (!day) return;

  document.getElementById('topbar-title').textContent = day.name;
  updateSaveButton();

  const mc = document.getElementById('main-content');
  mc.innerHTML = `
    <div style="padding:16px 0 0;">
      ${day.exercises.map(ex => buildExercisePanel(ex)).join('')}
      <div style="height:16px;"></div>
    </div>`;
}

function buildExercisePanel(ex) {
  const draftEx = state.draft?.exercises[ex.id];
  const doneSets = draftEx ? draftEx.sets.filter(s => s !== null).length : 0;
  const allDone  = doneSets === ex.sets;

  const suggestion = getSuggestedWeight(ex.id);
  let hintHTML = '';
  if (ex.trackWeight && suggestion) {
    if (suggestion.weight === null) {
      hintHTML = `<span class="progression-hint neutral">First session</span>`;
    } else if (suggestion.increased) {
      hintHTML = `<span class="progression-hint">↑ from ${suggestion.fromWeight}${getSettings().unit}</span>`;
    } else {
      hintHTML = `<span class="progression-hint neutral">Same as last</span>`;
    }
  }

  const currentWeight = draftEx?.weight ?? (suggestion?.weight ?? null);
  const isBarbell = isBarbellExercise(ex.name);

  const weightRow = ex.trackWeight ? `
    <div class="weight-row">
      <span class="weight-label">Weight</span>
      <div class="stepper">
        <button class="step-btn" data-action="weight-minus" data-ex-id="${ex.id}">−</button>
        <input class="step-input" type="number" min="0" max="500" step="${getSettings().unit === 'kg' ? 2.5 : 5}"
          value="${currentWeight !== null ? currentWeight : ''}"
          placeholder="—"
          data-weight-input="${ex.id}" />
        <button class="step-btn" data-action="weight-plus" data-ex-id="${ex.id}">+</button>
      </div>
      <span class="weight-unit">${getSettings().unit}</span>
      ${hintHTML}
      ${isBarbell ? `<button class="plate-calc-btn" data-action="open-plate-calc" data-ex-id="${ex.id}" title="Plate calculator">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="2" y1="12" x2="22" y2="12"/><rect x="7" y="9" width="2" height="6" rx="1"/><rect x="15" y="9" width="2" height="6" rx="1"/><rect x="4" y="10" width="3" height="4" rx="1"/><rect x="17" y="10" width="3" height="4" rx="1"/>
        </svg>
      </button>` : ''}
    </div>` : '';

  const setRows = Array.from({ length: ex.sets }, (_, i) => buildSetRow(ex, i, draftEx)).join('');
  const repLabel = ex.repsUnit === 'secs' ? 'sec' : ex.repsUnit === 'dist' ? '' : 'reps';

  return `
    <div class="ex-panel${allDone ? ' all-done' : ''}" id="ex-panel-${ex.id}">
      <div class="ex-panel-header">
        <div class="ex-name">${ex.name}${ex.perSide ? ' <span style="font-size:12px;font-weight:500;color:var(--text-3)">(each side)</span>' : ''}</div>
        <div class="ex-meta">
          <span class="tag">${ex.muscle}</span>
          <span class="ex-meta-text">${ex.sets} sets · ${ex.repsDisplay} ${repLabel}</span>
        </div>
        ${ex.notes ? `<div class="ex-note">${ex.notes}</div>` : ''}
      </div>
      ${weightRow}
      <div class="sets-area">${setRows}</div>
    </div>`;
}

function buildSetRow(ex, i, draftEx) {
  const logged = draftEx?.sets[i] ?? null;

  if (logged !== null) {
    const w = draftEx.weight;
    const weightText = ex.trackWeight && w !== null ? ` · ${w}${getSettings().unit}` : '';
    const repsLabel = ex.repsUnit === 'secs' ? 'sec' : ex.repsUnit === 'dist' ? '' : 'reps';
    const repsText  = ex.repsUnit === 'dist' ? '30m ✓' : `${logged} ${repsLabel}`;
    return `
      <div class="set-row done" data-ex-id="${ex.id}" data-set-idx="${i}">
        <span class="set-num">Set ${i + 1}</span>
        <div class="set-done-display">
          <span class="set-done-reps">${repsText}</span>
          <span class="set-done-weight">${weightText}</span>
        </div>
        <div class="set-done-check" data-action="unlog-set" data-ex-id="${ex.id}" data-set-idx="${i}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>`;
  }

  if (ex.repsUnit === 'dist') {
    return `
      <div class="set-row" data-ex-id="${ex.id}" data-set-idx="${i}">
        <span class="set-num">Set ${i + 1}</span>
        <button class="done-btn" data-action="log-set" data-ex-id="${ex.id}" data-set-idx="${i}">30m — Done</button>
      </div>`;
  }

  const defaultReps = getLastSetReps(ex.id, i) ?? ex.repsMin;
  const repsLabel   = ex.repsUnit === 'secs' ? 'sec' : 'reps';

  return `
    <div class="set-row" data-ex-id="${ex.id}" data-set-idx="${i}">
      <span class="set-num">Set ${i + 1}</span>
      <div class="stepper" style="flex:1;">
        <button class="step-btn" data-action="reps-minus" data-ex-id="${ex.id}" data-set-idx="${i}">−</button>
        <input class="step-input" style="flex:1;width:auto;" type="number" min="1" max="99"
          value="${defaultReps}"
          data-reps-input="${ex.id}-${i}" />
        <button class="step-btn" data-action="reps-plus" data-ex-id="${ex.id}" data-set-idx="${i}">+</button>
      </div>
      <span style="font-size:12px;color:var(--text-3);flex-shrink:0;">${repsLabel}</span>
      <button class="log-btn" data-action="log-set" data-ex-id="${ex.id}" data-set-idx="${i}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </button>
    </div>`;
}

function refreshExercisePanel(exId) {
  const ex    = findExercise(exId);
  const panel = document.getElementById(`ex-panel-${exId}`);
  if (!ex || !panel) return;
  const newHTML = buildExercisePanel(ex);
  const tmp = document.createElement('div');
  tmp.innerHTML = newHTML;
  panel.replaceWith(tmp.firstElementChild);
  const newInput = document.querySelector(`[data-weight-input="${exId}"]`);
  if (newInput) attachWeightInputListener(newInput, exId);
}

function attachWeightInputListener(input, exId) {
  input.addEventListener('change', () => {
    const v = parseFloat(input.value);
    if (!isNaN(v) && state.draft?.exercises[exId]) {
      state.draft.exercises[exId].weight = v;
      saveDraft(state.draft);
    }
  });
}

function logSet(exId, setIdx) {
  if (!state.draft?.exercises[exId]) return;
  const ex = findExercise(exId);
  if (!ex) return;

  let reps;
  if (ex.repsUnit === 'dist') {
    reps = 1;
  } else {
    const input = document.querySelector(`[data-reps-input="${exId}-${setIdx}"]`);
    reps = parseInt(input?.value) || ex.repsMin;
  }

  const wInput = document.querySelector(`[data-weight-input="${exId}"]`);
  if (wInput && wInput.value !== '') {
    const v = parseFloat(wInput.value);
    if (!isNaN(v)) state.draft.exercises[exId].weight = v;
  }

  state.draft.exercises[exId].sets[setIdx] = reps;
  saveDraft(state.draft);
  refreshExercisePanel(exId);
  updateSaveButton();

  // Start rest timer after panel refresh (inserts into fresh panel)
  startRestTimer(exId);

  // Check PR
  const weight = state.draft.exercises[exId].weight;
  if (checkAndRecordPR(exId, weight)) {
    state.sessionPRs.push({ exerciseName: ex.name, weight });
  }
}

function unlogSet(exId, setIdx) {
  if (!state.draft?.exercises[exId]) return;
  state.draft.exercises[exId].sets[setIdx] = null;
  saveDraft(state.draft);
  refreshExercisePanel(exId);
  updateSaveButton();
}

function adjustWeight(exId, delta) {
  if (!state.draft?.exercises[exId]) return;
  const step = getSettings().unit === 'kg' ? 2.5 : 5;
  const current = state.draft.exercises[exId].weight ?? 0;
  const next = Math.max(0, Math.round((current + delta * step) * 10) / 10);
  state.draft.exercises[exId].weight = next;
  saveDraft(state.draft);
  const input = document.querySelector(`[data-weight-input="${exId}"]`);
  if (input) input.value = next;
}

function adjustReps(exId, setIdx, delta) {
  const input = document.querySelector(`[data-reps-input="${exId}-${setIdx}"]`);
  if (!input) return;
  const v = parseInt(input.value) || 1;
  input.value = Math.max(1, Math.min(99, v + delta));
}

function updateSaveButton() {
  const btn = document.getElementById('btn-save');
  if (!btn || !state.draft) return;
  const anyLogged = Object.values(state.draft.exercises)
    .some(ex => ex.sets.some(s => s !== null));
  btn.disabled = !anyLogged;
}

function saveWorkout() {
  if (!state.draft) return;
  const sets = [];
  for (const [exId, exData] of Object.entries(state.draft.exercises)) {
    exData.sets.forEach((reps, i) => {
      if (reps !== null) {
        sets.push({ exerciseId: exId, setIndex: i, weight: exData.weight ?? 0, reps });
      }
    });
  }
  const log = {
    id: 'log_' + Date.now(),
    day: state.draft.day,
    date: state.draft.date,
    startedAt: state.draft.startedAt,
    sets,
  };
  const logs = getLogs();
  logs.push(log);
  saveLogs(logs);
  clearDraft();

  const prsHit = [...state.sessionPRs];
  state.draft = null;
  state.sessionPRs = [];
  clearRestTimer();

  showCompletionScreen(log, prsHit);
}

/* ============================================================
   Section 11: Completion Screen
   ============================================================ */

function showCompletionScreen(log, prsHit) {
  const day      = findDay(log.day);
  const dayName  = day ? day.name : `Day ${log.day}`;
  const totalSets = log.sets.length;
  const totalVol  = log.sets.reduce((n, s) => n + s.weight * (s.reps === 1 ? 0 : s.reps), 0);
  const duration  = log.startedAt
    ? Math.max(1, Math.round((new Date(log.date) - new Date(log.startedAt)) / 60000))
    : '—';
  const volStr    = totalVol > 0 ? totalVol.toLocaleString() : '—';
  const dateStr   = new Date(log.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

  const prsHTML = prsHit.length ? `
    <div class="completion-prs">
      <div class="completion-prs-title">Personal Records</div>
      ${prsHit.map(pr => `<div class="completion-pr-item">↑ ${pr.exerciseName} — ${pr.weight}${getSettings().unit}</div>`).join('')}
    </div>` : '';

  const overlay = document.createElement('div');
  overlay.id = 'completion-overlay';
  overlay.innerHTML = `
    <div class="completion-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <div class="completion-title">${dayName}</div>
    <div class="completion-date">${dateStr}</div>
    <div class="completion-stats">
      <div class="completion-stat">
        <div class="completion-stat-val">${totalSets}</div>
        <div class="completion-stat-label">Sets</div>
      </div>
      <div class="completion-stat">
        <div class="completion-stat-val">${volStr}</div>
        <div class="completion-stat-label">Volume</div>
      </div>
      <div class="completion-stat">
        <div class="completion-stat-val">${duration}m</div>
        <div class="completion-stat-label">Duration</div>
      </div>
    </div>
    ${prsHTML}
    <button class="completion-done-btn" data-action="completion-done">Done</button>`;

  document.getElementById('app').appendChild(overlay);

  // Hide the workout topbar
  document.getElementById('workout-topbar').classList.add('hidden');

  state.completionTimeout = setTimeout(() => dismissCompletionScreen(), 6000);
}

function dismissCompletionScreen() {
  if (state.completionTimeout) {
    clearTimeout(state.completionTimeout);
    state.completionTimeout = null;
  }
  const overlay = document.getElementById('completion-overlay');
  if (!overlay) { navigate('workouts'); return; }
  overlay.classList.add('out');
  setTimeout(() => {
    overlay.remove();
    navigate('workouts');
  }, 300);
}

/* ============================================================
   Section 12: History View
   ============================================================ */

function renderHistory() {
  const mc   = document.getElementById('main-content');
  const logs = getLogs().sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!logs.length) {
    mc.innerHTML = `
      <div class="page-header"><div class="page-title">History</div></div>
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
        <div class="empty-state-title">No workouts yet</div>
        <div class="empty-state-sub">Complete your first workout and it'll appear here.</div>
      </div>`;
    return;
  }

  mc.innerHTML = `
    <div class="page-header"><div class="page-title">History</div></div>
    ${logs.map(l => buildHistoryCard(l)).join('')}
    <div style="height:8px;"></div>`;
}

function buildHistoryCard(log) {
  const day       = findDay(log.day);
  const dayName   = day ? day.name : `Day ${log.day}`;
  const exIds     = [...new Set(log.sets.map(s => s.exerciseId))];
  const totalSets = log.sets.length;
  const totalVol  = log.sets.reduce((n, s) => n + s.weight * (s.reps === 1 ? 0 : s.reps), 0);
  const expanded  = state.expandedLog === log.id;

  const expandHTML = expanded ? `
    <div class="history-expand">
      ${exIds.map(eid => {
        const ex      = findExercise(eid);
        const exSets  = log.sets.filter(s => s.exerciseId === eid);
        const hasW    = ex?.trackWeight;
        const pills   = exSets.map((s, i) => {
          const rLabel = ex?.repsUnit === 'secs' ? 's' : ex?.repsUnit === 'dist' ? '✓' : '';
          const rText  = ex?.repsUnit === 'dist' ? '30m ✓' : `${s.reps}${rLabel}`;
          const wText  = hasW && s.weight ? ` @ ${s.weight}${getSettings().unit}` : '';
          return `<span class="history-set-pill">${rText}${wText}</span>`;
        }).join('');
        const chartBtn = ex && ex.trackWeight ? `
          <button class="chart-icon-btn" data-action="show-chart" data-ex-id="${eid}" title="Progress chart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </button>` : '';
        return `<div class="history-ex-block">
          <div class="history-ex-name">${ex ? ex.name : eid} ${ex ? `<span class="tag" style="font-size:10px;">${ex.muscle}</span>` : ''}${chartBtn}</div>
          <div class="history-sets-row">${pills}</div>
        </div>`;
      }).join('')}
      <button class="history-delete-btn" data-action="delete-log" data-log-id="${log.id}">Delete workout</button>
    </div>` : '';

  return `
    <div class="history-card" data-log-id="${log.id}">
      <div class="history-card-header" data-action="toggle-log" data-log-id="${log.id}">
        <div>
          <div class="history-date">${formatDate(log.date)}</div>
          <div class="history-day-name">${dayName}</div>
        </div>
        <svg class="history-chevron${expanded ? ' open' : ''}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="history-stats">
        <div class="history-stat"><div class="history-stat-val">${exIds.length}</div><div class="history-stat-label">Exercises</div></div>
        <div class="history-stat"><div class="history-stat-val">${totalSets}</div><div class="history-stat-label">Sets</div></div>
        <div class="history-stat"><div class="history-stat-val">${totalVol > 0 ? totalVol.toLocaleString() : '—'}</div><div class="history-stat-label">Volume</div></div>
      </div>
      ${expandHTML}
    </div>`;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

/* ============================================================
   Section 13: Progress Charts
   ============================================================ */

function getExerciseChartData(exId) {
  const unit = getSettings().unit;
  const logs = getLogs()
    .filter(l => l.sets.some(s => s.exerciseId === exId))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const labels  = [];
  const weights = [];
  let prIndex   = -1;
  let prWeight  = 0;

  for (const log of logs) {
    const exSets = log.sets.filter(s => s.exerciseId === exId);
    if (!exSets.length) continue;
    const maxW = Math.max(...exSets.map(s => s.weight || 0));
    if (maxW <= 0) continue;
    labels.push(new Date(log.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }));
    weights.push(maxW);
    if (maxW > prWeight) { prWeight = maxW; prIndex = weights.length - 1; }
  }

  return { labels, weights, prIndex, unit };
}

function renderProgressChart(exId) {
  const ex = findExercise(exId);
  if (!ex) return;
  const data = getExerciseChartData(exId);

  if (data.labels.length < 2) {
    openSheet({
      title: ex.name,
      html: `<div style="color:var(--text-2);font-size:14px;padding:16px 0;line-height:1.7;">
        Log at least 2 sessions to see your progress trend.
      </div>`,
    });
    return;
  }

  openSheet({
    title: ex.name,
    html: `<div style="position:relative;height:220px;margin:8px 0 4px;"><canvas id="chart-canvas"></canvas></div>
      <div style="font-size:12px;color:var(--text-3);text-align:center;margin-top:4px;">Weight over time (${data.unit})</div>`,
    onOpen: () => drawChart(exId, data),
  });
}

function drawChart(exId, data) {
  if (state.chartInstance) { state.chartInstance.destroy(); state.chartInstance = null; }
  const canvas = document.getElementById('chart-canvas');
  if (!canvas) return;

  const pointColors = data.weights.map((_, i) =>
    i === data.prIndex ? '#22c55e' : 'rgba(34,197,94,0.5)'
  );
  const pointRadius = data.weights.map((_, i) => i === data.prIndex ? 6 : 4);

  state.chartInstance = new Chart(canvas, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [{
        data: data.weights,
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34,197,94,0.08)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: pointColors,
        pointRadius: pointRadius,
        pointHoverRadius: 7,
        borderWidth: 2,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.parsed.y} ${data.unit}`,
          },
          backgroundColor: '#1a1a1a',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#888',
          bodyColor: '#f2f2f2',
        },
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.06)' },
          ticks: { color: '#555', font: { size: 11 } },
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.06)' },
          ticks: { color: '#555', font: { size: 11 } },
        },
      },
    },
  });
}

/* ============================================================
   Section 14: Settings View
   ============================================================ */

function renderSettings() {
  const mc  = document.getElementById('main-content');
  const { unit, restDuration } = getSettings();

  mc.innerHTML = `
    <div class="page-header"><div class="page-title">Settings</div></div>
    <div style="padding:0 16px;">

      <div class="settings-section">
        <div class="settings-label">Preferences</div>
        <div class="settings-card">
          <div class="settings-row" style="cursor:default;">
            <span class="settings-row-label">Weight Unit</span>
            <div class="segmented">
              <button class="seg-btn${unit === 'kg' ? ' active' : ''}" data-action="set-unit" data-unit="kg">kg</button>
              <button class="seg-btn${unit === 'lbs' ? ' active' : ''}" data-action="set-unit" data-unit="lbs">lbs</button>
            </div>
          </div>
          <div class="settings-row" style="cursor:default;">
            <span class="settings-row-label">Rest Timer</span>
            <div style="display:flex;align-items:center;gap:8px;">
              <button class="step-btn" style="width:36px;height:36px;" data-action="rest-minus">−</button>
              <span style="font-size:15px;font-weight:700;min-width:44px;text-align:center;">${restDuration}s</span>
              <button class="step-btn" style="width:36px;height:36px;" data-action="rest-plus">+</button>
            </div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-label">Data</div>
        <div class="settings-card">
          <div class="settings-row" data-action="export-data">
            <span class="settings-row-label">Export Backup</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </div>
          <div class="settings-row" data-action="import-data">
            <span class="settings-row-label">Import Backup</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
        </div>
        <input type="file" id="import-input" accept=".json" style="display:none;" />
      </div>

      <div class="settings-section">
        <div class="settings-label">Danger Zone</div>
        <div class="settings-card danger-card">
          <div class="settings-row" data-action="clear-data">
            <span class="settings-row-label danger">Clear All Data</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-label">About</div>
        <div class="settings-card">
          <div class="settings-row" style="cursor:default;">
            <span class="settings-row-label">Liftr</span>
            <span style="font-size:13px;color:var(--text-2);">v3.0.0</span>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('import-input').addEventListener('change', e => {
    if (e.target.files[0]) handleImport(e.target.files[0]);
    e.target.value = '';
  });
}

function handleExport() {
  const data = { logs: getLogs(), settings: getSettings(), exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'liftr-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Backup exported', 'success');
}

function handleImport(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data.logs)) { showToast('Invalid backup file', 'error'); return; }
      openSheet({
        title: 'Import Backup',
        html: `<div style="color:var(--text-2);font-size:14px;margin-bottom:20px;line-height:1.7;">
          This will <strong style="color:var(--danger);">replace all existing data</strong> with
          <strong>${data.logs.length}</strong> workout log${data.logs.length !== 1 ? 's' : ''}.
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn-ghost" style="flex:1;" data-action="close-sheet">Cancel</button>
          <button class="btn-danger" style="flex:2;" id="confirm-import-btn">Replace & Import</button>
        </div>`,
        onOpen: () => {
          document.getElementById('confirm-import-btn').addEventListener('click', () => {
            saveLogs(data.logs);
            if (data.settings) saveSettings(data.settings);
            rebuildPRsFromLogs();
            closeSheet();
            showToast('Data imported', 'success');
            renderSettings();
          });
        },
      });
    } catch { showToast('Could not read file', 'error'); }
  };
  reader.readAsText(file);
}

function handleClearData() {
  openSheet({
    title: 'Clear All Data',
    html: `<div style="color:var(--text-2);font-size:14px;margin-bottom:16px;line-height:1.7;">
      Permanently deletes all workout history. Cannot be undone.
    </div>
    <div class="form-group">
      <label class="form-label">Type <strong style="color:var(--danger);">DELETE</strong> to confirm</label>
      <input class="form-input" type="text" id="clear-input" placeholder="DELETE" autocomplete="off" />
    </div>
    <div style="display:flex;gap:8px;margin-top:4px;">
      <button class="btn-ghost" style="flex:1;" data-action="close-sheet">Cancel</button>
      <button class="btn-danger" id="confirm-clear-btn" style="flex:2;opacity:.4;" disabled>Clear Everything</button>
    </div>`,
    onOpen: () => {
      const inp = document.getElementById('clear-input');
      const btn = document.getElementById('confirm-clear-btn');
      inp.addEventListener('input', () => {
        const ok = inp.value === 'DELETE';
        btn.disabled = !ok;
        btn.style.opacity = ok ? '1' : '0.4';
      });
      btn.addEventListener('click', () => {
        [KEYS.logs, KEYS.settings, KEYS.draft, KEYS.prs].forEach(k => store.remove(k));
        state.draft = null;
        closeSheet();
        showToast('All data cleared', 'info');
        renderSettings();
      });
    },
  });
}

/* ============================================================
   Section 15: Sheet System
   ============================================================ */

let _sheetConfig = null;

function openSheet({ title, html, onOpen, onClose }) {
  _sheetConfig = { onClose };
  const overlay = document.getElementById('sheet-overlay');
  document.getElementById('sheet-content').innerHTML = `
    <div style="padding:4px 0 16px;font-size:18px;font-weight:700;">${title}</div>
    ${html}`;
  overlay.classList.add('open');
  if (onOpen) setTimeout(onOpen, 50);
}

function closeSheet() {
  document.getElementById('sheet-overlay').classList.remove('open');
  if (state.chartInstance) { state.chartInstance.destroy(); state.chartInstance = null; }
  if (_sheetConfig?.onClose) _sheetConfig.onClose();
  _sheetConfig = null;
}

/* ============================================================
   Section 16: Toast System
   ============================================================ */

function showToast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<div class="toast-dot"></div>${msg}`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 280); }, 3000);
}

/* ============================================================
   Section 17: Event Delegation
   ============================================================ */

function initEvents() {
  document.getElementById('main-content').addEventListener('click', handleClick);

  document.getElementById('sheet-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('sheet-overlay')) closeSheet();
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'close-sheet') { closeSheet(); return; }
    if (action) handleClick(e);
  });

  document.getElementById('workout-topbar').addEventListener('click', handleClick);

  document.getElementById('bottom-nav').addEventListener('click', e => {
    const btn = e.target.closest('[data-nav]');
    if (btn) navigate(btn.dataset.nav);
  });

  document.getElementById('main-content').addEventListener('change', e => {
    const inp = e.target.closest('[data-weight-input]');
    if (!inp) return;
    const exId = inp.dataset.weightInput;
    const v = parseFloat(inp.value);
    if (!isNaN(v) && state.draft?.exercises[exId]) {
      state.draft.exercises[exId].weight = v;
      saveDraft(state.draft);
    }
  });

  // Completion overlay click delegation
  document.getElementById('app').addEventListener('click', e => {
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'completion-done') dismissCompletionScreen();
  });
}

function handleClick(e) {
  const target = e.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;
  const exId   = target.dataset.exId;
  const setIdx = target.dataset.setIdx !== undefined ? parseInt(target.dataset.setIdx) : undefined;

  switch (action) {
    case 'start-day': {
      const day = parseInt(e.target.closest('[data-day]').dataset.day);
      initDraft(day);
      navigate('workout', day);
      break;
    }
    case 'resume-draft':
      if (state.draft) navigate('workout', state.draft.day);
      break;
    case 'discard-draft':
      clearDraft(); state.draft = null; renderHome();
      break;
    case 'go-back':
      navigate('workouts');
      break;
    case 'save-workout':
      saveWorkout();
      break;
    case 'weight-minus': adjustWeight(exId, -1); break;
    case 'weight-plus':  adjustWeight(exId, +1); break;
    case 'reps-minus':   adjustReps(exId, setIdx, -1); break;
    case 'reps-plus':    adjustReps(exId, setIdx, +1); break;
    case 'log-set':      logSet(exId, setIdx); break;
    case 'unlog-set':    unlogSet(exId, setIdx); break;
    case 'dismiss-timer': clearRestTimer(); break;
    case 'toggle-log': {
      const lid = target.dataset.logId;
      state.expandedLog = state.expandedLog === lid ? null : lid;
      renderHistory();
      break;
    }
    case 'delete-log': {
      const lid = target.dataset.logId;
      if (confirm('Delete this workout from history?')) {
        saveLogs(getLogs().filter(l => l.id !== lid));
        if (state.expandedLog === lid) state.expandedLog = null;
        showToast('Workout deleted', 'info');
        renderHistory();
      }
      break;
    }
    case 'set-unit': {
      const s = getSettings(); s.unit = target.dataset.unit; saveSettings(s);
      renderSettings();
      break;
    }
    case 'rest-minus': {
      const s = getSettings();
      s.restDuration = Math.max(30, s.restDuration - 15);
      saveSettings(s);
      renderSettings();
      break;
    }
    case 'rest-plus': {
      const s = getSettings();
      s.restDuration = Math.min(300, s.restDuration + 15);
      saveSettings(s);
      renderSettings();
      break;
    }
    case 'export-data': handleExport(); break;
    case 'import-data': document.getElementById('import-input')?.click(); break;
    case 'clear-data':  handleClearData(); break;
    case 'show-chart':  renderProgressChart(exId); break;
    case 'open-plate-calc': openPlateCalculator(exId); break;
    case 'plate-minus': {
      const unit = getSettings().unit;
      const step = unit === 'lbs' ? 5 : 2.5;
      state.plateCalcWeight = Math.max(0, Math.round((state.plateCalcWeight - step) * 10) / 10);
      document.getElementById('plate-target-weight').textContent = `${state.plateCalcWeight}${unit}`;
      document.getElementById('plate-calc-body').innerHTML = renderPlateCalcContent(state.plateCalcWeight, unit);
      break;
    }
    case 'plate-plus': {
      const unit = getSettings().unit;
      const step = unit === 'lbs' ? 5 : 2.5;
      state.plateCalcWeight = Math.round((state.plateCalcWeight + step) * 10) / 10;
      document.getElementById('plate-target-weight').textContent = `${state.plateCalcWeight}${unit}`;
      document.getElementById('plate-calc-body').innerHTML = renderPlateCalcContent(state.plateCalcWeight, unit);
      break;
    }
    case 'use-plate-weight': {
      const exId2 = state.plateCalcExId;
      if (exId2 && state.draft?.exercises[exId2]) {
        state.draft.exercises[exId2].weight = state.plateCalcWeight;
        saveDraft(state.draft);
        const wInput = document.querySelector(`[data-weight-input="${exId2}"]`);
        if (wInput) wInput.value = state.plateCalcWeight;
      }
      closeSheet();
      break;
    }
  }
}

/* ============================================================
   Section 18: Init
   ============================================================ */

function init() {
  const savedDraft = getDraft();
  if (savedDraft) state.draft = savedDraft;
  initEvents();
  navigate('workouts');
}

document.addEventListener('DOMContentLoaded', init);
