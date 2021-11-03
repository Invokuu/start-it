let output = document.getElementById('output'),
    textOutput = document.getElementById('text-output'),
    textInput = document.getElementById('text-input'),
    sizeInput = document.getElementById('size-input'),
    colorInput = document.getElementById('color-input'),
    textColorInput = document.getElementById('text-color-input'),
    borderInput = document.getElementById('border-input'),
    radiusInput = document.getElementById('radius-input');
    skewInput = document.getElementById('skew-input');

function render() {
    output.innerHTML = `<div style="
    width: ${sizeInput.value}px;
    height: ${sizeInput.value}px;
    background-color: ${colorInput.value};
    color: ${textColorInput.value};
    border: ${borderInput.value};
    border-radius: ${radiusInput.value}px;
    transform: skew(${skewInput.value}deg);
    "><div>${textInput.value}</div></div>`;
    textOutput.innerText = output.innerHTML.replaceAll('\n', '');
}

render();