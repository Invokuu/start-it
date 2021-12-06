const app = document.getElementById('app'), playerPiece = 'X', botPiece = 'O', emptyPiece = null;

// Model
let winnerPiece, board, boardWidth = 3, boardSize = boardWidth * boardWidth;

// View
function render() {
    app.innerHTML = board.map((v, i) => `<div onclick="setX(${i});">${v ? v : ''}</div>`).join('\n');
    if (winnerPiece) {
        app.innerHTML += `\n<div class="overlay"><h3>${winnerPiece} wins</h3></div>`;
    }
}

// Creates board and runs render
createEmptyBoard(3);

// Controller
function createEmptyBoard(width) {
    winnerPiece = null;
    boardWidth = width;
    boardSize = boardWidth * boardWidth;
    app.style.gridTemplate = `repeat(${boardWidth}, 100px) / repeat(${boardWidth}, 100px)`;
    board = [];
    for (let i = 0; i < boardSize; i++) {
        board.push(emptyPiece);
    }
    render();
}

function setX(index) {
    if (board[index] !== emptyPiece) return;
    board[index] = playerPiece;
    setRandomO();
    let winner = checkWin();
    if (winner) {
        winnerPiece = winner > 0 ? playerPiece : winner > -2 ? botPiece : 'Nobody';
        setTimeout(createEmptyBoard, 3000, 3);
    }
    render();
}

function setRandomO() {
    const available = Array.from(board.keys()).filter(i => board[i] === emptyPiece),
          random = Math.floor(Math.random() * available.length);

    if (available.length < 1) return;
    board[available[random]] = botPiece;
}

function checkWin() {
    // In case there is no winner
    let pieceCount = 0;
    // Loop through pieces
    for (let x = 0; x < board.length; x++) {
        // Set current piece to a variable
        const piece = board[x];
        // Add to piece count if not empty
        if (piece !== emptyPiece) pieceCount++;
        // Ignore pieces that are either empty or is not first row/column
        if (piece === emptyPiece || (x >= boardWidth && x % boardWidth)) continue;
        // hvd = horizontal, vertical, diagonal
        const hvd = [0, 0, 0];
        // Loop that checks piece patterns using boardWidth
        for (let y = 0; y < boardWidth; y++) {
            // Checks horizontal path
            if ((!x || x >= boardWidth) && board[x - (x % boardWidth) + y] === piece) hvd[0]++;
            // Checks vertical path
            if (x < boardWidth && board[x % boardWidth + (boardWidth * y)] === piece) hvd[1]++;
            // Checks diagonal path
            if ((!x || x === boardWidth - 1) && board[x + boardWidth * y + (!x ? y : -y)] === piece) hvd[2]++;
        }
        // Check if boardWidth is inside of hvd
        if (hvd.includes(boardWidth)) {
            return piece === playerPiece ? 1 : -1;
        }
    }
    return pieceCount === boardSize ? -2 : 0;
}