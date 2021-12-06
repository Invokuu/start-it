const output = document.getElementById('output');

function answer(value) {
    output.innerHTML = `<div class="${value}">Your answer is ${value}!</div>`;
}