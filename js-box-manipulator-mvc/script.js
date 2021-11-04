const app = document.getElementById('app');

// Model

let textInput = 'Hello World',
    sizeInput = 300,
    colorInput = '#43b581',
    textColorInput = 'white',
    borderInput = 'none',
    radiusInput = 50,
    skewInput = 0;

// View
function render() {
    app.innerHTML = `
    <div id="output">${getBoxView()}</div>
    <div class="controls">
        <label for="text-input">Text content</label>
        <input id="text-input" type="text" value="${textInput}" oninput="textInput = this.value;"/>
        <label for="size-input">Box size</label>
        <input id="size-input" type="range" min="100" max="500" step="10" value="${sizeInput}" oninput="sizeInput = this.value;"/>
        <label for="color-input">Box color</label>
        <select id="color-input" onchange="colorInput = this.value;">
            <option value="#f04747" ${selected(colorInput, '#f04747')}>Red</option>
            <option value="#43b581" ${selected(colorInput, '#43b581')}>Green</option>
            <option value="#7289da" ${selected(colorInput, '#7289da')}>Blue</option>
            <option value="black" ${selected(colorInput, 'black')}>Black</option>
            <option value="white" ${selected(colorInput, 'white')}>White</option>
        </select>
        <label for="text-color-input">Text color</label>
        <select id="text-color-input" onchange="textColorInput = this.value;">
            <option value="#f04747" ${selected(textColorInput, '#f04747')}>Red</option>
            <option value="#43b581" ${selected(textColorInput, '#43b581')}>Green</option>
            <option value="#7289da" ${selected(textColorInput, '#7289da')}>Blue</option>
            <option value="black" ${selected(textColorInput, 'black')}>Black</option>
            <option value="white" ${selected(textColorInput, 'white')}>White</option>
        </select>
        <label for="border-input">Border color</label>
        <select id="border-input" onchange="borderInput = this.value;">
            <option value="3px solid #f04747" ${selected(borderInput, '#f04747')}>Red</option>
            <option value="3px solid #43b581" ${selected(borderInput, '#43b581')}>Green</option>
            <option value="3px solid #7289da" ${selected(borderInput, '#7289da')}>Blue</option>
            <option value="3px solid black" ${selected(borderInput, 'black')}>Black</option>
            <option value="3px solid white" ${selected(borderInput, 'white')}>White</option>
            <option value="none" ${selected(borderInput, 'none')}>None</option>
        </select>
        <label for="radius-input">Box radius</label>
        <input id="radius-input" type="range" min="0" max="100" step="10" value="${radiusInput}" oninput="radiusInput = this.value;"/>
        <label for="skew-input">Skew box</label>
        <input id="skew-input" type="range" min="0" max="180" step="10" value="${skewInput}" oninput="skewInput = this.value;"/>
        <div class="result">
            <div id="text-output" class="code">${getBoxViewText()}</div>
            <button onclick="render();">Update</button>
        </div>
    </div>`;
}

function getBoxView() {
    return `<div style="
    width: ${sizeInput}px;
    height: ${sizeInput}px;
    background-color: ${colorInput};
    color: ${textColorInput};
    border: ${borderInput};
    border-radius: ${radiusInput}px;
    transform: skew(${skewInput}deg);
    "><div>${textInput}</div></div>`;
}

function getBoxViewText() {
    return getBoxView().replaceAll('\n', '').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function selected(value, subvalue) {
    return value.indexOf(subvalue) > -1 ? 'selected' : '';
}

render();