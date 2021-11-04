const app = document.getElementById('app');

// Model
let result = '';

// View
function render() {
    app.innerHTML = `
    <div class="result">${result}</div>
    <div onclick="append(7);">7</div>
    <div onclick="append(8);">8</div>
    <div onclick="append(9);">9</div>
    <div class="neutral" onclick="append('÷');">÷</div>
    <div onclick="append(4);">4</div>
    <div onclick="append(5);">5</div>
    <div onclick="append(6);">6</div>
    <div class="neutral" onclick="append('×');">×</div>
    <div onclick="append(1);">1</div>
    <div onclick="append(2);">2</div>
    <div onclick="append(3);">3</div>
    <div class="neutral" onclick="append('-');">-</div>
    <div class="negative" onclick="clearResult();">C</div>
    <div onclick="append(0);">0</div>
    <div class="positive" onclick="calculate();">=</div>
    <div class="neutral" onclick="append('+');">+</div>`;
}

render();

// Controller
function append(character) {
    result += character;
    render();
}

function clearResult() {
    result = '';
    render();
}

function calculate() {
    result = eval(result.replaceAll('×', '*').replaceAll('÷', '/')).toString();
    render();
}