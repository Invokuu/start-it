const app = document.getElementById('app');

// Model
let gridWidth, gridSize, random, startTime, endTime, resultTime, timeout;

// View
function render() {
    app.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        app.innerHTML += `\n<div${i === random ? ' class="active" onclick="turnOff();"' : ''}></div>`;
    }
    app.innerHTML += `\n<div class="display" style="grid-column: span ${gridWidth};">${resultTime ? resultTime : 'No time yet'}</div>`;
}

createGrid(5);
turnOnAtRandom();

// Controller
function createGrid(width, itemSize = 100) {
    gridWidth = width;
    gridSize = width * width;
    app.style.gridTemplate = `repeat(${width}, ${itemSize}px) auto / repeat(${width}, ${itemSize}px)`;
    render();
}

function randIndex() {
    return Math.floor(Math.random() * gridSize);
}

// Duration function, can handle milliseconds all the way to days (overkill)
function toDurationString(duration) {
    const cs = 1000, cm = cs * 60, ch = cm * 60, cd = ch * 24;
    let d, h, m, s, ms, res = [];
    if (d = Math.floor(duration / cd)) res.push(d + 'd');
    if (h = Math.floor(duration % cd / ch)) res.push(h + 'h');
    if (m = Math.floor(duration % ch / cm)) res.push(m + 'm');
    if (s = Math.floor(duration % cm / cs)) res.push(s + 's');
    if (ms = duration % cs) res.push(ms + 'ms');
    return res.join(' ');
}

function turnOff() {
    endTime = Date.now();
    random = undefined;
    resultTime = toDurationString(endTime - startTime);
    render();
    turnOnAtRandom();
}

function turnOn() {
    random = randIndex();
    startTime = Date.now();
    render();
}

function turnOnAtRandom() {
    clearTimeout(timeout);
    timeout = setTimeout(turnOn, Math.floor(Math.random() * 8000) + 2000);
}