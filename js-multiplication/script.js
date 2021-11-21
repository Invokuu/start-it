const matrixView = document.getElementById('matrix');

let columnCount = 5, matrix = [
    1, 2, 3, 4, 5,
    2, 4, 6, 8, 10,
    3, 6, 9, 12, 15,
    4, 8, 12, 16, 20,
    5, 10, 15, 20, 25
];

function render() {
    let elements = [];
    for (let i = 0; i < matrix.length; i++) {
        elements.push(`<div>${matrix[i]}</div>`);
    }
    matrixView.innerHTML = elements.join('\n');
    matrixView.style.gridTemplate = `repeat(${columnCount}, 50px) / repeat(${columnCount}, 50px)`;
}

render();

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