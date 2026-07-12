/* ============================================================
   Section 0: Exercise Vault
   ============================================================ */

const EXERCISE_VAULT = [
  { group: 'Chest', exercises: [
    { name:'Barbell bench press',      trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Incline barbell press',    trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Decline barbell press',    trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Dumbbell bench press',     trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Incline dumbbell press',   trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Cable fly',                trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Pec deck',                 trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Chest dips',               trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Push-ups',                 trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Close-grip push-up',       trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Chest press machine',      trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
  ]},
  { group: 'Back', exercises: [
    { name:'Pull-ups',                 trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Chin-ups',                 trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Barbell row',              trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Dumbbell row',             trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:true  },
    { name:'Seated cable row',         trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Lat pulldown',             trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'T-bar row',                trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Meadows row',              trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:true  },
    { name:'Face pulls',               trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Straight-arm pulldown',    trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Rack pull',                trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
  ]},
  { group: 'Shoulders', exercises: [
    { name:'Barbell overhead press',   trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Dumbbell overhead press',  trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Arnold press',             trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Dumbbell lateral raise',   trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Cable lateral raise',      trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Front raise',              trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Rear delt fly',            trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Machine shoulder press',   trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Upright row',              trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
  ]},
  { group: 'Biceps', exercises: [
    { name:'Barbell curl',             trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Dumbbell curl',            trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:true  },
    { name:'Hammer curl',              trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Incline curl',             trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Preacher curl',            trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Cable curl',               trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'EZ bar curl',              trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Concentration curl',       trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:true  },
    { name:'Spider curl',              trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
  ]},
  { group: 'Triceps', exercises: [
    { name:'Skull crushers',           trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Close-grip bench press',   trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Tricep rope pushdown',     trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Tricep bar pushdown',      trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Overhead tricep extension',trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Tricep dips',              trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Diamond push-up',          trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Kickback',                 trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:true  },
  ]},
  { group: 'Legs', exercises: [
    { name:'Barbell squat',            trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
    { name:'Front squat',              trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
    { name:'Hack squat',               trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
    { name:'Leg press',                trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
    { name:'Romanian deadlift',        trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
    { name:'Sumo deadlift',            trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
    { name:'Bulgarian split squat',    trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:true  },
    { name:'Walking lunges',           trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Goblet squat',             trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Leg curl',                 trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Leg extension',            trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Hip thrust',               trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
    { name:'Banded clamshell',         trackWeight:false, increment:0,   repsUnit:'reps', perSide:true  },
    { name:'Nordic curl',              trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Step-ups',                 trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:true  },
    { name:'Single-leg calf raise',    trackWeight:false, increment:0,   repsUnit:'reps', perSide:true  },
    { name:'Standing calf raise',      trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Seated calf raise',        trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
  ]},
  { group: 'Core', exercises: [
    { name:'Plank',                    trackWeight:false, increment:0,   repsUnit:'secs', perSide:false },
    { name:'Copenhagen plank',         trackWeight:false, increment:0,   repsUnit:'secs', perSide:true  },
    { name:'Dead bug',                 trackWeight:false, increment:0,   repsUnit:'reps', perSide:true  },
    { name:'Ab wheel rollout',         trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Cable crunch',             trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Hanging leg raise',        trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Leg raises',               trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Russian twists',           trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Crunches',                 trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
    { name:'Pallof press',             trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Sit-ups',                  trackWeight:false, increment:0,   repsUnit:'reps', perSide:false },
  ]},
  { group: 'Full Body', exercises: [
    { name:'Conventional deadlift',    trackWeight:true,  increment:5,   repsUnit:'reps', perSide:false },
    { name:'Power clean',              trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Kettlebell swing',         trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:"Farmer's carry",           trackWeight:true,  increment:2.5, repsUnit:'dist', perSide:false },
    { name:'Thruster',                 trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
    { name:'Clean and press',          trackWeight:true,  increment:2.5, repsUnit:'reps', perSide:false },
  ]},
];

/* ============================================================
   Section 1: Programme Data
   ============================================================ */

let PROGRAMME = [
  {
    day: 1, name: 'Upper',
    exercises: [
      { id:'u1', name:'Pull-ups',                 sets:3, repsMin:6,  repsMax:10, repsDisplay:'6–10',   muscle:'Lats',                 notes:'Full ROM – assisted if needed to hit reps cleanly',       increment:0,   trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'u2', name:'Barbell bench press',      sets:3, repsMin:8,  repsMax:10, repsDisplay:'8–10',   muscle:'Chest',                notes:'',                                                        increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'u3', name:'Barbell row',              sets:3, repsMin:8,  repsMax:10, repsDisplay:'8–10',   muscle:'Mid back / rhomboids', notes:'Neutral grip – drive elbows back – pause at contraction', increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'u4', name:'Overhead press',           sets:3, repsMin:8,  repsMax:10, repsDisplay:'8–10',   muscle:'Front delts',          notes:'Brace core – avoid excessive lean back',                  increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'u5', name:'Romanian deadlift',        sets:3, repsMin:10, repsMax:12, repsDisplay:'10–12',  muscle:'Hamstrings / glutes',  notes:'Hinge at hips – soft knee – feel the hamstring stretch',  increment:5,   trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'u6', name:'Face pulls',               sets:2, repsMin:15, repsMax:20, repsDisplay:'15–20',  muscle:'Rear delts',           notes:'Rope to forehead – elbows high – key for shoulder health', increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
    ]
  },
  {
    day: 2, name: 'Lower',
    exercises: [
      { id:'lo1', name:'Back squat',              sets:3, repsMin:8,  repsMax:10, repsDisplay:'8–10',   muscle:'Quads / glutes',       notes:'Brace, chest up – depth to parallel or below',            increment:2.5, trackWeight:true,  perSide:false, repsUnit:'reps' },
      { id:'lo2', name:'Bulgarian split squat',   sets:3, repsMin:8,  repsMax:10, repsDisplay:'8–10 ea',muscle:'Quads / glutes',       notes:'Watch hip drop – keep pelvis level – very Scafell-specific', increment:2.5, trackWeight:true, perSide:true,  repsUnit:'reps' },
      { id:'lo3', name:'Weighted step-ups',       sets:3, repsMin:10, repsMax:10, repsDisplay:'10 ea',  muscle:'Quads / glutes',       notes:'Control the descent – mimics uphill running directly',    increment:2.5, trackWeight:true,  perSide:true,  repsUnit:'reps' },
      { id:'lo4', name:'Single-leg calf raise',   sets:3, repsMin:15, repsMax:20, repsDisplay:'15–20 ea',muscle:'Calves',              notes:'Full ROM – protects Achilles on long climbs',             increment:0,   trackWeight:false, perSide:true,  repsUnit:'reps' },
      { id:'lo5', name:'Incline dumbbell press',  sets:2, repsMin:10, repsMax:12, repsDisplay:'10–12',  muscle:'Upper chest',          notes:'Upper filler – keeps upper body ticking without leg fatigue', increment:2.5, trackWeight:true, perSide:false, repsUnit:'reps' },
      { id:'lo6', name:'Dead bug',                sets:3, repsMin:10, repsMax:10, repsDisplay:'10 ea',  muscle:'Deep core',            notes:'Slow and controlled – no lower back arch – running stability', increment:0,  trackWeight:false, perSide:true,  repsUnit:'reps' },
    ]
  },
];

/* ============================================================
   Section 2: Storage
   ============================================================ */

const KEYS = { logs: 'lt_logs', settings: 'lt_settings', draft: 'lt_draft', prs: 'lt_prs', programme: 'lt_programme' };

const store = {
  get(k)      { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v)   { localStorage.setItem(k, JSON.stringify(v)); },
  remove(k)   { localStorage.removeItem(k); },
};

function getLogs()         { return store.get(KEYS.logs)     || []; }
function saveProgramme()   { store.set(KEYS.programme, PROGRAMME); }
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

function getLastSetData(exerciseId, setIndex) {
  const relevant = getLogs()
    .filter(l => l.sets.some(s => s.exerciseId === exerciseId))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  if (!relevant.length) return null;
  return relevant[0].sets.find(s => s.exerciseId === exerciseId && s.setIndex === setIndex) ?? null;
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
  const exObj = findExercise(exId);
  const duration = exObj?.restDuration ?? getSettings().restDuration;
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
    const exObj2 = findExercise(timer.targetExId);
    const duration = exObj2?.restDuration ?? getSettings().restDuration;
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
    <div style="padding:0 16px 8px;">
      <button class="add-day-card" data-action="add-day">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        New workout
      </button>
    </div>
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

  const lastLog = getLastLogForDay(dayNum);
  const bannerHtml = lastLog
    ? `<div class="last-session-banner">Last session: ${formatDate(lastLog.date)}</div>`
    : `<div class="last-session-banner">First session — good luck!</div>`;

  const mc = document.getElementById('main-content');
  mc.innerHTML = `
    <div style="padding:16px 0 0;">
      ${bannerHtml}
      ${day.exercises.map(ex => buildExercisePanel(ex)).join('')}
      <div style="padding:0 16px 12px;">
        <textarea class="session-notes-input" placeholder="Session notes…" data-session-notes>${state.draft?.notes ?? ''}</textarea>
      </div>
      <div id="add-exercise-row" style="padding:0 16px 24px;">
        <button class="add-ex-btn" data-action="add-exercise">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add exercise
        </button>
      </div>
    </div>`;
}

function buildExercisePanel(ex) {
  const draftEx = state.draft?.exercises[ex.id];
  const doneSets  = draftEx ? draftEx.sets.filter(s => s !== null).length : 0;
  const totalSets = draftEx ? draftEx.sets.length : ex.sets;
  const allDone   = totalSets > 0 && doneSets === totalSets;

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

  const numSetsForRows = draftEx ? draftEx.sets.length : ex.sets;
  const setRows = Array.from({ length: numSetsForRows }, (_, i) => buildSetRow(ex, i, draftEx)).join('');
  const repLabel = ex.repsUnit === 'secs' ? 'sec' : ex.repsUnit === 'dist' ? '' : 'reps';

  const numSets = draftEx ? draftEx.sets.length : ex.sets;
  const setControls = `
    <div class="set-controls">
      <button class="set-ctrl-btn" data-action="remove-set" data-ex-id="${ex.id}">− Remove set</button>
      <button class="set-ctrl-btn set-ctrl-add" data-action="add-set" data-ex-id="${ex.id}">+ Add set</button>
    </div>`;

  return `
    <div class="ex-panel${allDone ? ' all-done' : ''}" id="ex-panel-${ex.id}">
      <div class="ex-panel-header">
        <div class="ex-name-row">
          <div class="ex-name">${ex.name}${ex.perSide ? ' <span style="font-size:12px;font-weight:500;color:var(--text-3)">(each side)</span>' : ''}</div>
          <div style="display:flex;gap:6px;">
            <button class="swap-btn" data-action="swap-exercise" data-ex-id="${ex.id}" title="Swap exercise">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16V4m0 0L3 8m4-4 4 4"/><path d="M17 8v12m0 0 4-4m-4 4-4-4"/></svg>
            </button>
            <button class="swap-btn remove-ex-btn" data-action="remove-exercise" data-ex-id="${ex.id}" title="Remove exercise">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            </button>
          </div>
        </div>
        <div class="ex-meta">
          ${ex.muscle ? `<span class="tag">${ex.muscle}</span>` : ''}
          <button class="edit-reps-btn" data-action="edit-reps" data-ex-id="${ex.id}">${numSets} sets · ${ex.repsDisplay} ${repLabel}</button>
          <button class="ex-rest-btn" data-action="edit-rest" data-ex-id="${ex.id}">⏱ ${ex.restDuration ?? getSettings().restDuration}s</button>
          ${hintHTML}
        </div>
        ${ex.notes ? `<div class="ex-note">${ex.notes}</div>` : ''}
      </div>
      <div class="sets-area">${setRows}</div>
      ${setControls}
    </div>`;
}

function buildSetRow(ex, i, draftEx) {
  const logged = draftEx?.sets[i] ?? null;

  if (logged !== null) {
    // Support both legacy (plain number) and new ({reps, weight}) format
    const reps = (typeof logged === 'object') ? logged.reps : logged;
    const w    = (typeof logged === 'object') ? logged.weight : draftEx.weight;
    const wLabel = (typeof logged === 'object') ? logged.weightLabel : null;
    const weightText = ex.trackWeight ? (wLabel === 'BW' || w === 0 ? ' · BW' : (w != null ? ` · ${w}${getSettings().unit}` : '')) : '';
    const repsLabel = ex.repsUnit === 'secs' ? 'sec' : ex.repsUnit === 'dist' ? '' : 'reps';
    const repsText  = ex.repsUnit === 'dist' ? '30m ✓' : `${reps} ${repsLabel}`;
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

  const defaultReps   = getLastSetReps(ex.id, i) ?? ex.repsMin;
  const defaultWeight = draftEx?.weight ?? '';
  const repsLabel     = ex.repsUnit === 'secs' ? 'sec' : 'reps';
  const unit          = getSettings().unit;

  const lastSet = getLastSetData(ex.id, i);
  let lastHint = '';
  if (lastSet) {
    const wLabel = lastSet.weightLabel === 'BW' ? 'BW' : (lastSet.weight ? `${lastSet.weight}${unit}` : null);
    lastHint = ex.trackWeight && wLabel
      ? `<span class="set-last-hint">Last: ${lastSet.reps} × ${wLabel}</span>`
      : `<span class="set-last-hint">Last: ${lastSet.reps} ${repsLabel}</span>`;
  }

  return `
    <div class="set-row" data-ex-id="${ex.id}" data-set-idx="${i}">
      <span class="set-num">Set ${i + 1}</span>
      ${ex.trackWeight ? `
      <div class="set-weight-inline">
        <input class="set-weight-input" type="text" inputmode="decimal"
          value="${defaultWeight || ''}"
          placeholder="—"
          data-set-weight-input="${ex.id}-${i}" />
        <span class="set-weight-unit">${unit}</span>
      </div>` : ''}
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
      ${lastHint}
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

  const setWInput = document.querySelector(`[data-set-weight-input="${exId}-${setIdx}"]`);
  let weight = state.draft.exercises[exId].weight ?? 0;
  let weightLabel = null;
  if (setWInput) {
    const raw = setWInput.value.trim();
    if (/^bw$/i.test(raw)) {
      weight = 0; weightLabel = 'BW';
    } else {
      const v = parseFloat(raw);
      if (!isNaN(v)) weight = v;
    }
  }
  // Store weight as new default so subsequent sets pre-fill with same value
  if (!weightLabel && weight > 0) state.draft.exercises[exId].weight = weight;

  state.draft.exercises[exId].sets[setIdx] = ex.trackWeight ? { reps, weight, weightLabel } : reps;
  saveDraft(state.draft);
  navigator.vibrate?.(30);
  refreshExercisePanel(exId);
  updateSaveButton();

  // Start rest timer after panel refresh (inserts into fresh panel)
  startRestTimer(exId);

  // Check PR
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
  const exerciseNames = {};
  for (const [exId, exData] of Object.entries(state.draft.exercises)) {
    const ex = findExercise(exId);
    if (ex) exerciseNames[exId] = ex.name;
    exData.sets.forEach((s, i) => {
      if (s === null) return;
      // Support both legacy (plain number) and new ({reps,weight}) format
      const reps   = (typeof s === 'object') ? s.reps   : s;
      const weight = (typeof s === 'object') ? s.weight : (exData.weight ?? 0);
      sets.push({ exerciseId: exId, setIndex: i, weight, reps });
    });
  }
  const log = {
    id: 'log_' + Date.now(),
    day: state.draft.day,
    date: state.draft.date,
    startedAt: state.draft.startedAt,
    sets,
    exerciseNames,
    notes: state.draft.notes ?? '',
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
        const exName  = log.exerciseNames?.[eid] ?? ex?.name ?? eid;
        const exSets  = log.sets.filter(s => s.exerciseId === eid);
        const hasW    = ex?.trackWeight ?? exSets.some(s => s.weight > 0);
        const pills   = exSets.map((s, i) => {
          const rLabel = ex?.repsUnit === 'secs' ? 's' : ex?.repsUnit === 'dist' ? '✓' : '';
          const rText  = ex?.repsUnit === 'dist' ? '30m ✓' : `${s.reps}${rLabel}`;
          const wText  = hasW ? (s.weightLabel === 'BW' || s.weight === 0 ? ' @ BW' : (s.weight ? ` @ ${s.weight}${getSettings().unit}` : '')) : '';
          return `<span class="history-set-pill">${rText}${wText}</span>`;
        }).join('');
        const chartBtn = ex?.trackWeight ? `
          <button class="chart-icon-btn" data-action="show-chart" data-ex-id="${eid}" title="Progress chart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </button>` : '';
        return `<div class="history-ex-block">
          <div class="history-ex-name">${exName} ${ex ? `<span class="tag" style="font-size:10px;">${ex.muscle}</span>` : ''}${chartBtn}</div>
          <div class="history-sets-row">${pills}</div>
        </div>`;
      }).join('')}
      ${log.notes ? `<div class="history-notes">${log.notes}</div>` : ''}
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
  const data = { logs: getLogs(), settings: getSettings(), programme: PROGRAMME, exportedAt: new Date().toISOString() };
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
            if (data.programme) { PROGRAMME = data.programme; saveProgramme(); }
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

  document.getElementById('main-content').addEventListener('input', e => {
    if (e.target.dataset.sessionNotes !== undefined && state.draft) {
      state.draft.notes = e.target.value;
      saveDraft(state.draft);
    }
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

function openExerciseSwap(exId) {
  const renderList = (query) => {
    const q = query.toLowerCase().trim();
    return EXERCISE_VAULT.map((group, gi) => {
      const matches = group.exercises
        .map((ex, ei) => ({ ex, ei }))
        .filter(({ ex }) => !q || ex.name.toLowerCase().includes(q));
      if (!matches.length) return '';
      return `
        <div class="vault-group">
          <div class="vault-group-label">${group.group}</div>
          ${matches.map(({ ex, ei }) => `
            <button class="vault-item" data-action="pick-exercise" data-ex-id="${exId}" data-group-idx="${gi}" data-ex-idx="${ei}">
              ${ex.name}
              ${ex.perSide ? '<span class="vault-tag">each side</span>' : ''}
              ${ex.trackWeight ? '' : '<span class="vault-tag">bodyweight</span>'}
            </button>`).join('')}
        </div>`;
    }).join('');
  };

  openSheet({
    title: exId ? 'Swap Exercise' : 'Add Exercise',
    html: `
      <div class="vault-search-wrap">
        <input id="vault-search" class="vault-search" type="text" placeholder="Search exercises…" autocomplete="off" />
      </div>
      <div id="vault-list">${renderList('')}</div>`,
    onOpen: () => {
      const input = document.getElementById('vault-search');
      const list  = document.getElementById('vault-list');
      input?.addEventListener('input', () => { list.innerHTML = renderList(input.value); });
      input?.focus();
    },
  });
}

function addExercise(vaultEx) {
  if (!state.draft) return;
  const newId = 'custom_' + Date.now();
  const newEx = {
    id: newId,
    name: vaultEx.name,
    sets: 3,
    repsMin: 8, repsMax: 12, repsDisplay: '8–12',
    muscle: '', notes: '',
    increment: vaultEx.increment,
    trackWeight: vaultEx.trackWeight,
    perSide: vaultEx.perSide,
    repsUnit: vaultEx.repsUnit,
  };
  const day = PROGRAMME.find(d => d.day === state.draft.day);
  if (!day) return;
  day.exercises.push(newEx);
  state.draft.exercises[newId] = { weight: null, sets: Array(3).fill(null) };
  saveDraft(state.draft);

  const addRow = document.getElementById('add-exercise-row');
  const tmp = document.createElement('div');
  tmp.innerHTML = buildExercisePanel(newEx);
  const panel = tmp.firstElementChild;
  addRow?.parentElement.insertBefore(panel, addRow);
  const wInput = panel.querySelector(`[data-weight-input="${newId}"]`);
  if (wInput) attachWeightInputListener(wInput, newId);

  closeSheet();
  promptSavePermanent(
    `Add <strong style="color:var(--text)">${newEx.name}</strong> to this workout permanently for future sessions?`,
    saveProgramme
  );
}

function swapExercise(oldExId, vaultEx) {
  if (!state.draft?.exercises[oldExId]) return;
  const currentSets = state.draft.exercises[oldExId].sets.length;
  const newId = 'custom_' + Date.now();
  const newEx = {
    id: newId,
    name: vaultEx.name,
    sets: currentSets,
    repsMin: 8, repsMax: 12, repsDisplay: '8–12',
    muscle: '', notes: '',
    increment: vaultEx.increment,
    trackWeight: vaultEx.trackWeight,
    perSide: vaultEx.perSide,
    repsUnit: vaultEx.repsUnit,
  };

  // Replace in PROGRAMME day so buildExercisePanel can find it
  const day = PROGRAMME.find(d => d.day === state.draft.day);
  if (!day) return;
  const idx = day.exercises.findIndex(e => e.id === oldExId);
  if (idx === -1) return;
  day.exercises[idx] = newEx;

  // Migrate draft
  const oldDraftEx = state.draft.exercises[oldExId];
  delete state.draft.exercises[oldExId];
  state.draft.exercises[newId] = { weight: oldDraftEx.weight, sets: Array(currentSets).fill(null) };
  saveDraft(state.draft);

  // Re-render the panel in-place
  const oldPanel = document.getElementById(`ex-panel-${oldExId}`);
  if (oldPanel) {
    const tmp = document.createElement('div');
    tmp.innerHTML = buildExercisePanel(newEx);
    oldPanel.replaceWith(tmp.firstElementChild);
    attachWeightInputListener(document.querySelector(`[data-weight-input="${newId}"]`), newId);
  }

  closeSheet();
  promptSavePermanent(
    `Keep <strong style="color:var(--text)">${newEx.name}</strong> as a permanent swap for future sessions?`,
    saveProgramme
  );
}

function promptSavePermanent(title, onSave) {
  openSheet({
    title: 'Save change?',
    html: `
      <div style="color:var(--text-2);font-size:14px;margin-bottom:20px;line-height:1.7;">${title}</div>
      <div style="display:flex;gap:8px;">
        <button class="btn-ghost" style="flex:1;border:1px solid var(--border);border-radius:var(--r-full);" data-action="close-sheet">Just today</button>
        <button class="btn-primary-full" style="flex:1;" id="save-permanent-btn">Save for future</button>
      </div>`,
    onOpen: () => {
      document.getElementById('save-permanent-btn').addEventListener('click', () => {
        onSave();
        closeSheet();
      });
    },
  });
}

function applyExerciseChange(exId, changes) {
  const ex = findExercise(exId);
  if (!ex) return;
  Object.assign(ex, changes);
  refreshExercisePanel(exId);
  promptSavePermanent(
    `Keep these changes to <strong style="color:var(--text)">${ex.name}</strong> for future sessions too?`,
    saveProgramme
  );
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
    case 'go-back': {
      const hasLogged = state.draft && Object.values(state.draft.exercises).some(ex => ex.sets.some(s => s !== null));
      if (hasLogged) {
        openSheet({
          title: 'Save workout?',
          html: `
            <div style="color:var(--text-2);font-size:14px;margin-bottom:20px;line-height:1.7;">You have logged sets. Save to history or continue later?</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <button class="btn-primary-full" id="back-save-btn">Save & finish</button>
              <button class="btn-ghost" style="border:1px solid var(--border);border-radius:var(--r-full);" id="back-later-btn">Continue later</button>
              <button class="btn-ghost" style="color:var(--danger);" id="back-discard-btn">Discard workout</button>
            </div>`,
          onOpen: () => {
            document.getElementById('back-save-btn').addEventListener('click', () => { closeSheet(); saveWorkout(); });
            document.getElementById('back-later-btn').addEventListener('click', () => { closeSheet(); navigate('workouts'); });
            document.getElementById('back-discard-btn').addEventListener('click', () => { closeSheet(); clearDraft(); state.draft = null; navigate('workouts'); });
          },
        });
      } else {
        navigate('workouts');
      }
      break;
    }
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
    case 'remove-exercise': {
      if (!state.draft?.exercises[exId]) break;
      const removedEx = findExercise(exId);
      const removedName = removedEx?.name ?? exId;
      delete state.draft.exercises[exId];
      const day2 = PROGRAMME.find(d => d.day === state.draft?.day) ||
                   PROGRAMME.find(d => d.exercises.some(e => e.id === exId));
      if (day2) day2.exercises = day2.exercises.filter(e => e.id !== exId);
      document.getElementById(`ex-panel-${exId}`)?.remove();
      saveDraft(state.draft);
      updateSaveButton();
      promptSavePermanent(
        `Remove <strong style="color:var(--text)">${removedName}</strong> from this workout permanently?`,
        saveProgramme
      );
      break;
    }
    case 'add-exercise':
      openExerciseSwap(null);
      break;
    case 'add-day':
      openSheet({
        title: 'New Workout',
        html: `
          <div class="form-group">
            <label class="form-label">Workout name</label>
            <input class="form-input" id="new-day-name" placeholder="e.g. Arms, Cardio…" autocomplete="off" />
          </div>
          <button class="btn-primary-full" id="create-day-btn">Create</button>`,
        onOpen: () => {
          const inp = document.getElementById('new-day-name');
          const btn = document.getElementById('create-day-btn');
          inp?.focus();
          btn.addEventListener('click', () => {
            const name = inp.value.trim();
            if (!name) return;
            const nextDay = Math.max(...PROGRAMME.map(d => d.day)) + 1;
            PROGRAMME.push({ day: nextDay, name, exercises: [] });
            saveProgramme();
            closeSheet();
            renderHome();
          });
        },
      });
      break;
    case 'edit-reps': {
      const editEx = findExercise(exId);
      if (!editEx) break;
      const curMin = editEx.repsMin; const curMax = editEx.repsMax;
      openSheet({
        title: 'Edit Rep Range',
        html: `
          <div style="font-size:13px;color:var(--text-2);margin-bottom:16px;">${editEx.name}</div>
          <div style="display:flex;gap:24px;margin-bottom:24px;">
            <div style="flex:1;">
              <div class="form-label" style="margin-bottom:8px;">Min reps</div>
              <div class="stepper">
                <button class="step-btn" id="reps-min-minus">−</button>
                <input class="step-input" id="reps-min-val" type="number" min="1" max="99" value="${curMin}" />
                <button class="step-btn" id="reps-min-plus">+</button>
              </div>
            </div>
            <div style="flex:1;">
              <div class="form-label" style="margin-bottom:8px;">Max reps</div>
              <div class="stepper">
                <button class="step-btn" id="reps-max-minus">−</button>
                <input class="step-input" id="reps-max-val" type="number" min="1" max="99" value="${curMax}" />
                <button class="step-btn" id="reps-max-plus">+</button>
              </div>
            </div>
          </div>
          <button class="btn-primary-full" id="save-reps-btn">Save</button>`,
        onOpen: () => {
          const minI = document.getElementById('reps-min-val');
          const maxI = document.getElementById('reps-max-val');
          document.getElementById('reps-min-minus').addEventListener('click', () => { minI.value = Math.max(1, parseInt(minI.value)-1); });
          document.getElementById('reps-min-plus').addEventListener('click',  () => { minI.value = Math.min(99, parseInt(minI.value)+1); });
          document.getElementById('reps-max-minus').addEventListener('click', () => { maxI.value = Math.max(1, parseInt(maxI.value)-1); });
          document.getElementById('reps-max-plus').addEventListener('click',  () => { maxI.value = Math.min(99, parseInt(maxI.value)+1); });
          document.getElementById('save-reps-btn').addEventListener('click', () => {
            const mn = Math.max(1, parseInt(minI.value)||1);
            const mx = Math.max(mn, parseInt(maxI.value)||mn);
            const display = mn === mx ? `${mn}` : `${mn}–${mx}`;
            closeSheet();
            applyExerciseChange(exId, { repsMin: mn, repsMax: mx, repsDisplay: display });
          });
        },
      });
      break;
    }
    case 'edit-rest': {
      const restEx = findExercise(exId);
      if (!restEx) break;
      const curRest = restEx.restDuration ?? getSettings().restDuration;
      openSheet({
        title: 'Rest Timer',
        html: `
          <div style="font-size:13px;color:var(--text-2);margin-bottom:16px;">${restEx.name}</div>
          <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:24px;">
            <button class="step-btn" style="width:52px;height:52px;" id="rest-edit-minus">−</button>
            <span style="font-size:28px;font-weight:700;min-width:72px;text-align:center;font-variant-numeric:tabular-nums;" id="rest-edit-val">${curRest}s</span>
            <button class="step-btn" style="width:52px;height:52px;" id="rest-edit-plus">+</button>
          </div>
          <button class="btn-primary-full" id="save-rest-btn">Save</button>`,
        onOpen: () => {
          let val = curRest;
          const display = document.getElementById('rest-edit-val');
          document.getElementById('rest-edit-minus').addEventListener('click', () => { val = Math.max(30, val-30); display.textContent = val+'s'; });
          document.getElementById('rest-edit-plus').addEventListener('click',  () => { val = Math.min(600, val+30); display.textContent = val+'s'; });
          document.getElementById('save-rest-btn').addEventListener('click', () => {
            closeSheet();
            applyExerciseChange(exId, { restDuration: val });
          });
        },
      });
      break;
    }
    case 'add-set': {
      if (!state.draft?.exercises[exId]) break;
      state.draft.exercises[exId].sets.push(null);
      saveDraft(state.draft);
      refreshExercisePanel(exId);
      updateSaveButton();
      break;
    }
    case 'remove-set': {
      if (!state.draft?.exercises[exId]) break;
      const sets = state.draft.exercises[exId].sets;
      if (sets.length <= 1) break;
      sets.pop();
      saveDraft(state.draft);
      refreshExercisePanel(exId);
      updateSaveButton();
      break;
    }
    case 'swap-exercise':
      openExerciseSwap(exId);
      break;
    case 'pick-exercise': {
      const groupIdx = parseInt(target.dataset.groupIdx);
      const exIdx    = parseInt(target.dataset.exIdx);
      const picked   = EXERCISE_VAULT[groupIdx].exercises[exIdx];
      if (exId) {
        swapExercise(exId, picked);
      } else {
        addExercise(picked);
      }
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
  const savedProgramme = store.get(KEYS.programme);
  if (savedProgramme) PROGRAMME = savedProgramme;
  const savedDraft = getDraft();
  if (savedDraft) state.draft = savedDraft;
  initEvents();
  navigate('workouts');
}

document.addEventListener('DOMContentLoaded', init);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/liftr/sw.js');
}
