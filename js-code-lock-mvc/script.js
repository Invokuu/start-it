const app = document.getElementById('app');

// Model
let pinCode = '';

// View
function render() {
    app.innerHTML = `
    <div class="pin">${pinCode}</div>
    <button onclick="pin(1)">1</button>
    <button onclick="pin(2)">2</button>
    <button onclick="pin(3)">3</button>
    <button onclick="pin(4)">4</button>
    <button onclick="pin(5)">5</button>
    <button onclick="pin(6)">6</button>
    <button onclick="pin(7)">7</button>
    <button onclick="pin(8)">8</button>
    <button onclick="pin(9)">9</button>
    <button disabled>*</button>
    <button onclick="pin(0)">0</button>
    <button disabled>#</button>`;
}

render();

// Controller
function pin(num) {
    pinCode += num;
    render();
}