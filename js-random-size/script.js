let output = document.getElementById('output'),
    widthBox = document.getElementById('width'),
    heightBox = document.getElementById('height'),
    borderBox = document.getElementById('border');

let width = Math.floor(Math.random() * 500) + 100,
    height = Math.floor(Math.random() * 300) + 100,
    border = Math.floor(Math.random() * 30);

widthBox.innerHTML = width;
heightBox.innerHTML = height;
borderBox.innerHTML = border;

output.innerHTML = `<div style="
width: ${width}px;
height: ${height}px;
border-width: ${border}px;
"></div>`;