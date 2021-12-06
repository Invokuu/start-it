const output = document.getElementById('output');

function update(element, color) {
    output.innerHTML = `<div class="${color}">${element.innerHTML}</div>`;
}