const app = document.getElementById('app');
// Model
let answer, response = 'Hint: A snack';

// View
function render() {
    app.innerHTML = `
    <h2>Guess the word!</h2>
    <input type="text" onchange="answer = this.value;" oninput="clearClasses();" autofocus/>
    <button onclick="compare();">Check</button>
    <h4>${response}</h4>`;
}

function clearClasses() {
    app.classList.remove('success');
    app.classList.remove('failure');
}

// Controller
function compare() {
    if (answer.length < 1) return;
    if (answer.toLowerCase() === 'chocolate') {
        app.classList.add('success');
        response = 'That is the correct answer!';
        render();
        return;
    }
    app.classList.add('failure');
    response = 'That is the wrong answer!';
    render();
}

render();