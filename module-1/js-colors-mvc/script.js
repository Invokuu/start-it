const app = document.getElementById('app');

// Model
let color = 'light-green';

// View
function render() {
    app.innerHTML = `
    <div class="${color}">Hello World!</div>
    <select onchange="color = this.value;">
        <option value="black" ${selected(color, 'black')}>Black</option>
        <option value="dark-blue" ${selected(color, 'blue')}>Dark blue</option>
        <option value="light-grey" ${selected(color, 'grey')}>Light grey</option>
        <option value="light-green" ${selected(color, 'green')}>Light green</option>
        <option value="light-red" ${selected(color, 'red')}>Light red</option>
    </select>
    <button onclick="update();">Update</button>`;
}

render();

// Controller
function update() {
    if (color === 'black' || color === 'dark-blue') {
        color += ' white-text';
    }
    render();
}

function selected(value, subvalue) {
    return value.indexOf(subvalue) > -1 ? 'selected' : '';
}