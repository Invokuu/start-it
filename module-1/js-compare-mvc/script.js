const app = document.getElementById('app');

// Model
let firstType, firstValue = '', secondType, secondValue = '', thirdType, thirdValue = '';

// Just chaining the assign for conveniency
firstType = secondType = thirdType = 'span';

// View
function render() {
    app.innerHTML = `
    <p>Change the texts! (Also try filling out number)</p>
    <div class="texts">
        <${firstType}>Text 1 and 2 are identical</${firstType}>
        <${secondType}>Text 1 and 3 are identical</${secondType}>
        <${thirdType}>Text 2 and 3 are identical</${thirdType}>
    </div>
    <input type="text" value="${firstValue}" oninput="firstValue = this.value;" placeholder="Text 1">
    <input type="text" value="${secondValue}" oninput="secondValue = this.value;" placeholder="Text 2">
    <input type="text" value="${thirdValue}" oninput="thirdValue = this.value;" placeholder="Text 3">
    <button onclick="compare();">Compare texts</button>`;
}

render();

// Controller
function compare() {
    firstType = firstValue === secondValue ? 'span' : 'del';
    secondType = firstValue === thirdValue ? 'span' : 'del';
    thirdType = secondValue === thirdValue ? 'span' : 'del';
    render();
}