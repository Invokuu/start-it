const matrixView = document.getElementById('matrix');

// Model
let columnCount = 5, matrix;

// View
function render() {
    let elements = [];
    for (let i = 0; i < matrix.length; i++) {
        elements.push(`<div>${matrix[i]}</div>`);
    }
    matrixView.innerHTML = elements.join('\n');
    matrixView.style.gridTemplate = `repeat(${columnCount}, 50px) / repeat(${columnCount}, 50px)`;
}

// Controller
function updateColumns(value) {
    columnCount = value;
    matrix = [];
    for (let x = 1; x <= value; x++) {
        for (let y = 1; y <= value; y++) {
            matrix.push(x * y);
        }
    }
    render();
}

// Initial update
updateColumns(columnCount);