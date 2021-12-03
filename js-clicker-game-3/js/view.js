/*
 * VIEW
 */

// App div const
const app = document.getElementById('app');

// Renders the view
function render() {
    app.innerHTML = `
    <div class="clicker" onclick="handleClick();">${model.emoji[model.emojiType][model.emojiState]}</div>
    <div class="points">${model.points.toLocaleString()}</div>
    <div class="timer">${model.time}s (${model.time === 0 ? 0 : decimal3(model.clicks/model.time)} CpS)</div>
    <button onclick="buyUpgrade('click');">Click upgrade (10 points)</button>
    <button onclick="buyUpgrade('emoji');" ${isAvailable('emoji') ? '' : 'disabled'}>Emoji upgrade (100 points)</button>
    <button onclick="buyUpgrade('autoClick');" ${isAvailable('autoClick') ? '' : 'disabled'}>Autoclick upgrade (500 points)</button>
    <button class="red" onclick="reset();">Reset</button>
    <button class="red" onclick="cheat();">Cheat</button>
    <div class="message">${model.message}</div>
    <table>
    <tr>
        <th>When</th>
        <th>Score</th>
    </tr>
    ${getScoreboard()}
    </table>`;
}

function getScoreboard() {
    let html = '';
    if (model.scoreboard.length < 1) {
        html += '<tr><td colspan="2">No scores yet</td></tr>';
        return html;
    }
    for (let i = 0; i < model.scoreboard.length; i++) {
        html += `
            <tr><td>${model.scoreboard[i].time.toLocaleTimeString()}</td>
            <td>${model.scoreboard[i].score.toLocaleString()}</td></tr>`;
    }
    return html;
}

// Initial render
render();