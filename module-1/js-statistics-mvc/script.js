const app = document.getElementById('app');

// Model
let sum = 0, count = 0, input = '';

// View
function render() {
    const avg = count ? precision(sum / count, 3) : '<i>NA</i>'
    app.innerHTML = `
    <p class="span-4">Write a number in the input to get the sum, average and count.</p>
    <input type="number" value="${input}" class="span-4" placeholder="Number" oninput="input = this.value;"/>
    <button onclick="add();" class="span-2">Add</button>
    <button onclick="reset();" class="span-2">Reset</button>
    <div class="info"><span>Sum</span><span>${sum}</span></div>
    <div class="info span-2"><span>Average</span><span>${avg}<span></div>
    <div class="info"><span>Count</span><span>${count}</span></div>`;
}

render();

// Controller
function add() {
    if (!input) return;
    sum += parseInt(input);
    count++;
    render();
}

function reset() {
    sum = 0;
    count = 0;
    input = '';
    render();
}

// To deal with huge decimals
function precision(value, point) {
    const num = 10 ** point;
    return Math.floor(value * num) / num;
}