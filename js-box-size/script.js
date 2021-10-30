let output = document.getElementById('output'),
    widthInput = document.getElementById('width-input'),
    heightInput = document.getElementById('height-input'),
    widthBox = document.getElementById('width'),
    heightBox = document.getElementById('height'),
    areaBox = document.getElementById('area'),
    circumferenceBox = document.getElementById('circumference');

function showDiv() {
    let width = parseInt(widthInput.value),
        height = parseInt(heightInput.value);

    widthBox.innerHTML = width;
    heightBox.innerHTML = height;
    areaBox.innerHTML = width * height;
    circumferenceBox.innerHTML = (width * 2) + (height * 2);

    output.innerHTML = `<div style="
    width: ${width}px;
    height: ${height}px;
    "></div>`;
}

showDiv();