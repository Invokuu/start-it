const txt1 = document.getElementById('txt1'),
      txt2 = document.getElementById('txt2'),
      txt3 = document.getElementById('txt3'),
      first = document.getElementById('first');

function sort() {
    if (txt1.value <= txt2.value && txt1.value <= txt3.value) {
        first.innerHTML = txt1.value;
    } else if (txt2.value <= txt3.value) {
        first.innerHTML = txt2.value;
    } else {
        first.innerHTML = txt3.value;
    }
    if (first.innerHTML === '') {
        first.innerHTML = '<i class="negative-text">(empty)</i>';
    }
}