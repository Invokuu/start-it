let output = document.getElementById('output'),
    widthInput = document.getElementById('width-input'),
    heightInput = document.getElementById('height-input'),
    area = document.getElementById('area'),
    circumference = document.getElementById('circumference');

function showDiv() {
    let width = parseInt(widthInput.value),
        height = parseInt(heightInput.value);

    area.innerHTML = width * height;
    circumference.innerHTML = (width * 2) + (height * 2);

    output.innerHTML = `<div style="
    width: ${width}px;
    height: ${height}px;
    "></div>`;
}

showDiv();