const symbols = [
  { id: 'crown', icon: '♛', label: 'Crown', weight: 8, pays: {3: 8, 4: 18, 5: 45} },
  { id: 'gem', icon: '◆', label: 'Gem', weight: 11, pays: {3: 6, 4: 14, 5: 32} },
  { id: 'seven', icon: '7', label: 'Seven', weight: 13, pays: {3: 5, 4: 11, 5: 26} },
  { id: 'bolt', icon: 'ϟ', label: 'Bolt', weight: 18, pays: {3: 3, 4: 7, 5: 15} },
  { id: 'star', icon: '★', label: 'Star', weight: 20, pays: {3: 2, 4: 5, 5: 10} },
  { id: 'wild', icon: 'W', label: 'Wild', weight: 6, pays: {3: 10, 4: 25, 5: 60}, wild: true },
  { id: 'scatter', icon: '✦', label: 'Scatter', weight: 5, scatter: true }
];

const paylines = [
  [1,1,1,1,1],
  [0,0,0,0,0],
  [2,2,2,2,2],
  [0,1,2,1,0],
  [2,1,0,1,2]
];

const betOptions = [10,20,50,100];
let credits = 1000;
let betIndex = 1;
let freeSpins = 0;
let isSpinning = false;
let soundOn = true;

const reelsEl = document.getElementById('reels');
const creditsEl = document.getElementById('credits');
const betDisplayEl = document.getElementById('betDisplay');
const betControlValueEl = document.getElementById('betControlValue');
const lastWinEl = document.getElementById('lastWin');
const freeSpinsEl = document.getElementById('freeSpins');
const messageEl = document.getElementById('message');
const spinBtn = document.getElementById('spinBtn');
const betDown = document.getElementById('betDown');
const betUp = document.getElementById('betUp');
const soundBtn = document.getElementById('soundBtn');

function weightedSymbol() {
  const total = symbols.reduce((sum, s) => sum + s.weight, 0);
  let roll = Math.random() * total;
  for (const symbol of symbols) {
    roll -= symbol.weight;
    if (roll <= 0) return symbol;
  }
  return symbols[0];
}

function makeGrid() {
  return Array.from({length: 3}, () => Array.from({length: 5}, weightedSymbol));
}

function renderGrid(grid, winningCells = new Set()) {
  reelsEl.innerHTML = '';
  for (let col = 0; col < 5; col++) {
    for (let row = 0; row < 3; row++) {
      const symbol = grid[row][col];
      const cell = document.createElement('div');
      const key = `${row}-${col}`;
      cell.className = `symbol ${winningCells.has(key) ? 'win' : ''}`;
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.innerHTML = `<span class="icon">${symbol.icon}</span><span class="label">${symbol.label}</span>`;
      reelsEl.appendChild(cell);
    }
  }
}

function setSpinningState(active) {
  [...reelsEl.children].forEach(el => el.classList.toggle('spinning', active));
}

function evaluatePayline(grid, rows) {
  const firstNonWild = rows.map((row, col) => grid[row][col]).find(s => !s.wild && !s.scatter);
  const target = firstNonWild?.id || 'wild';
  let count = 0;
  const cells = [];

  for (let col = 0; col < 5; col++) {
    const symbol = grid[rows[col]][col];
    if (symbol.scatter) break;
    if (symbol.id === target || symbol.wild) {
      count++;
      cells.push(`${rows[col]}-${col}`);
    } else break;
  }

  if (count < 3) return null;
  const base = symbols.find(s => s.id === target) || symbols.find(s => s.wild);
  const multiplier = base.pays[count] || 0;
  return multiplier ? { count, multiplier, cells, symbol: base } : null;
}

function evaluateGrid(grid, bet) {
  let totalWin = 0;
  const winningCells = new Set();
  const lineWins = [];
  const lineStake = bet / paylines.length;

  paylines.forEach((rows, index) => {
    const win = evaluatePayline(grid, rows);
    if (!win) return;
    const amount = Math.round(lineStake * win.multiplier);
    totalWin += amount;
    win.cells.forEach(c => winningCells.add(c));
    lineWins.push({ line: index + 1, amount, ...win });
  });

  let scatterCount = 0;
  grid.forEach((row, r) => row.forEach((s, c) => {
    if (s.scatter) { scatterCount++; if (scatterCount >= 3) winningCells.add(`${r}-${c}`); }
  }));

  return { totalWin, winningCells, lineWins, scatterCount };
}

function updateHud(win = 0) {
  creditsEl.textContent = credits.toLocaleString();
  const bet = betOptions[betIndex];
  betDisplayEl.textContent = bet.toLocaleString();
  betControlValueEl.textContent = bet.toLocaleString();
  lastWinEl.textContent = win.toLocaleString();
  freeSpinsEl.textContent = freeSpins;
}

function beep(freq = 440, duration = .06) {
  if (!soundOn) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(.035, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + duration);
  osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration);
}

async function spin() {
  if (isSpinning) return;
  const bet = betOptions[betIndex];
  const usingFreeSpin = freeSpins > 0;

  if (!usingFreeSpin && credits < bet) {
    messageEl.textContent = 'Not enough demo credits. Refresh the page to reset the prototype.';
    return;
  }

  isSpinning = true;
  spinBtn.disabled = true;
  betDown.disabled = true;
  betUp.disabled = true;
  if (usingFreeSpin) freeSpins--; else credits -= bet;
  updateHud(0);
  messageEl.textContent = usingFreeSpin ? 'Free spin in progress…' : 'Spinning…';

  setSpinningState(true);
  for (let i = 0; i < 8; i++) {
    renderGrid(makeGrid());
    setSpinningState(true);
    beep(250 + i * 25, .035);
    await new Promise(r => setTimeout(r, 70 + i * 8));
  }

  const grid = makeGrid();
  const result = evaluateGrid(grid, bet);
  if (result.scatterCount >= 3) freeSpins += 5;
  credits += result.totalWin;
  renderGrid(grid, result.winningCells);
  setSpinningState(false);
  updateHud(result.totalWin);

  if (result.scatterCount >= 3) {
    messageEl.textContent = `Scatter bonus! ${result.scatterCount} Scatters award 5 free spins${result.totalWin ? ` + ${result.totalWin} credits` : ''}.`;
    beep(780, .16);
  } else if (result.totalWin > 0) {
    const details = result.lineWins.map(w => `L${w.line} ${w.symbol.label}×${w.count}`).join(' · ');
    messageEl.textContent = `WIN ${result.totalWin} credits — ${details}`;
    beep(660, .13);
  } else {
    messageEl.textContent = 'No win this spin. Try again.';
  }

  isSpinning = false;
  spinBtn.disabled = false;
  betDown.disabled = false;
  betUp.disabled = false;
}

betDown.addEventListener('click', () => { if (betIndex > 0) betIndex--; updateHud(); beep(320); });
betUp.addEventListener('click', () => { if (betIndex < betOptions.length - 1) betIndex++; updateHud(); beep(360); });
spinBtn.addEventListener('click', spin);
soundBtn.addEventListener('click', () => { soundOn = !soundOn; soundBtn.textContent = `Sound: ${soundOn ? 'On' : 'Off'}`; soundBtn.setAttribute('aria-pressed', String(soundOn)); });

document.getElementById('paytableBtn').addEventListener('click', () => document.getElementById('paytableDialog').showModal());
document.getElementById('helpBtn').addEventListener('click', () => document.getElementById('helpDialog').showModal());
document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => document.getElementById(btn.dataset.close).close()));

const paytableList = document.getElementById('paytableList');
symbols.filter(s => !s.scatter).forEach(symbol => {
  const row = document.createElement('div');
  row.className = 'payrow';
  row.innerHTML = `<span class="bigicon">${symbol.icon}</span><span>${symbol.label}${symbol.wild ? ' — substitutes for regular symbols' : ''}</span><strong>3× ${symbol.pays[3]} · 4× ${symbol.pays[4]} · 5× ${symbol.pays[5]}</strong>`;
  paytableList.appendChild(row);
});
const scatterRow = document.createElement('div');
scatterRow.className = 'payrow';
scatterRow.innerHTML = `<span class="bigicon">✦</span><span>Scatter — 3+ anywhere</span><strong>5 Free Spins</strong>`;
paytableList.appendChild(scatterRow);

renderGrid(makeGrid());
updateHud();
