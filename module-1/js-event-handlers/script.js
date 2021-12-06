const output = document.getElementById('output');

function log(value, evt) {
    // This is just to stop context menu from showing
    evt && evt.preventDefault();
    output.innerHTML += `<li>Triggered event: <code>${value}</code></li>`;
    console.log(`Triggered event: ${value}`);
}