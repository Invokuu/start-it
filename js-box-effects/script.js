const background = document.getElementById('background'),
      text = document.getElementById('text'),
      border = document.getElementById('border'),
      shadow = document.getElementById('shadow'),
      transform = document.getElementById('transform'),
      circle = document.getElementById('circle');

let active;

function enable() {
    background.disabled = false;
    text.disabled = false;
    border.disabled = false;
    shadow.disabled = false;
    transform.disabled = false;
    circle.disabled = false;
}

function toggleClass(activator, className) {
    if (active) {
        if (activator.checked) {
            active.classList.add(className);
        } else {
            active.classList.remove(className);
        }
    }
}

function changeElement(element) {
    if (active) {
        active.classList.remove('selected');
    } else {
        enable();
    }
    element.classList.add('selected');
    background.checked = element.classList.contains('background');
    text.checked = element.classList.contains('text');
    border.checked = element.classList.contains('border');
    shadow.checked = element.classList.contains('shadow');
    transform.checked = element.classList.contains('transform');
    circle.checked = element.classList.contains('circle');
    active = element;
}