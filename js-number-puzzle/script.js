const app = document.getElementById('app');

// Model
let board = [3, 5, 6, 8, 1, 0, 2, 4, 7], boardWidth = 3, boardSize = boardWidth * boardWidth, win = false;

// View
function render() {
    app.innerHTML = board.map((v, i) => `<div onclick="clickNumber(${i});">${v ? v : ''}</div>`).join('\n');
    if (win) app.innerHTML += `\n<div class="overlay"><h3>You won!</h3></div>`;
}

render();

// Controller
function clickNumber(index) {
    let blankIndex = findBlankIndex(index);
    if (blankIndex === null) return;
    board[blankIndex] = board[index];
    board[index] = 0;
    win = checkWin();
    render();
}

function findBlankIndex(index) {
    let deltas = [];
    // Allows checking above
    if (index >= boardWidth) deltas.push(-boardWidth);
    // Allows checking left
    if (index % boardWidth) deltas.push(-1);
    // Allows checking right
    if (index % boardWidth !== boardWidth - 1) deltas.push(1);
    // Allows checking below
    if (index < board.length - boardWidth) deltas.push(boardWidth);
    // Check each index
    for (let delta of deltas) {
        let i = index + delta;
        if (board[i]) continue;
        return i;
    }
    return null;
}

function checkWin() {
    for (let i = 1; i < board.length; i++) {
        if (i !== board[i - 1]) return false;
    }
    return true;
}