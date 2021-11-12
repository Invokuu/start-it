const app = document.getElementById('app');

// Model
let points = 0,
    time = 0,
    clicks = 0,
    cps = 0,
    pointsIncrement = 1,
    smileState = 0,
    autoClick = false,
    message = '',
    interval,
    emojiFunction = emojiView;


// View
function render() {
    app.innerHTML = `
    <div class="clicker" onclick="handleClick();">${emojiFunction()}</div>
    <div class="points">${points.toLocaleString()}</div>
    <div class="timer">${time}s (${time === 0 ? 0 : decimal3(clicks/time)} CpS)</div>
    <button onclick="upgradeClick();">Click upgrade (10 points)</button>
    <button onclick="upgradeEmoji();" ${emojiFunction === catView ? 'disabled' : ''}>Emoji upgrade (100 points)</button>
    <button onclick="upgradeAutoClick();" ${autoClick ? 'disabled' : ''}>Autoclick upgrade (500 points)</button>
    <button class="red" onclick="reset();">Reset</button>
    <button class="red" onclick="cheat();">Cheat</button>
    <div class="message">${message}</div>`;
}

function emojiView() {
    if (smileState === 0) {
        return '😁';
    } else if (smileState === 1) {
        return '😀';
    } else {
        return '😊';
    }
}

function catView() {
    if (smileState === 0) {
        return '😼';
    } else if (smileState === 1) {
        return '🙀';
    } else {
        return '😸';
    }
}

render();

// Controller
function handleClick() {
    if (!interval) startTimer();
    clicks++;
    points += pointsIncrement;
    smileState = smileState > 1 ? 0 : smileState + 1;
    render();
}

function upgradeClick() {
    if (points < 10) return;
    points -= 10;
    pointsIncrement++;
    render();
}

function upgradeEmoji() {
    if (points < 100 || emojiFunction === catView) return;
    points -= 100;
    emojiFunction = catView;
    render();
}

function upgradeAutoClick() {
    if (points < 500 || autoClick) return;
    points -= 500;
    autoClick = true;
    render();
}

function reset() {
    points = 0;
    time = 0;
    clicks = 0;
    cps = 0;
    pointsIncrement = 1;
    smileState = 0;
    autoClick = false;
    message = '';
    clearInterval(interval);
    interval = undefined;
    emojiFunction = emojiView;
    render();
}

function cheat() {
    points *= 10;
    pointsIncrement *= 10;
    message = 'You cheated!';
    render();
}

function startTimer() {
    interval = setInterval(() => {
        if (autoClick) {
            points += pointsIncrement;
        }
        time++;
        render();
    }, 1000);
}

function decimal3(num) {
    return Math.floor(num * 1000) / 1000;
}