const app = document.getElementById('app');
let answer = 'Hint: A snack';

function render() {
    app.innerHTML = `
    <h2>Guess the word!</h2>
    <input type="text" onchange="compare(this.value);" oninput="clearClasses();"/>
    <h4>${answer}</h4>`;
}

function clearClasses() {
    app.classList.remove('success');
    app.classList.remove('failure');
}

function compare(value) {
    if (value.length < 1) return;
    if (value.toLowerCase() === 'chocolate') {
        app.classList.add('success');
        answer = 'That is the correct answer!';
        render();
        return;
    }
    app.classList.add('failure');
    answer = 'That is the wrong answer!';
    render();
}

render();