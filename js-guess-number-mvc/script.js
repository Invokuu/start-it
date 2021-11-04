const app = document.getElementById('app');

// Model
let resClass, response, inputValue, randomNumber;

// View
function render() {
    app.innerHTML = `
    <p class="span-3">Guess the randomly generated number by using hints below. (1-100)</p>
    <input type="number" value="${inputValue}" placeholder="Number" oninput="inputValue = parseInt(this.value);" autofocus/>
    <button onclick="check();">Check</button>
    <button class="negative" onclick="restart();">Restart</button>
    <p class="span-3 ${resClass}">${response}</p>`;
}

restart();

// Controller
function check() {
    if (inputValue === randomNumber) {
        resClass = 'positive-text';
        response = 'You answered with the correct number!';
    } else if (inputValue > randomNumber) {
        resClass = 'negative-text';
        response = 'Your number is higher than the random number.';
    } else {
        resClass = 'negative-text';
        response = 'Your number is lower than the random number.';
    }
    render();
}

function restart() {
    resClass = '';
    response = 'Awaiting your guess...';
    inputValue = 0;
    randomNumber = random();
    render();
}

function random() {
    return Math.floor(Math.random() * 100) + 1;
}