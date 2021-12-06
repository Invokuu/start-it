const app = document.getElementById('app');

// Model
let points = 0,
    pointsIncrement = 1,
    smileState = false,
    message = '';

// Controller
function handleClick() {
    points += pointsIncrement;
    smileState = !smileState;
    render();
}

function buyUpgrade() {
    if (points < 10) return;
    points -= 10;
    pointsIncrement++;
    render();
}

function cheat() {
    points *= 10;
    pointsIncrement *= 10;
    message = 'You cheated!';
    render();
}

// View
function render() {
    const emoji = smileState ? '😀' : '😁';
    app.innerHTML = `
    <div class="clicker" onclick="handleClick();">${emoji}</div>
    <button onclick="buyUpgrade();" style="margin-top:25px;">Buy upgrade (10 points)</button>
    <button onclick="cheat();">Cheat</button>
    <div class="message">${message}</div>
    <div class="points">${points.toLocaleString()}</div>`;
}

render();