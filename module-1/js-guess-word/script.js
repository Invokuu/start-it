const box = document.getElementById('box'),
      res = document.getElementById('response');

function clearClasses() {
    box.classList.remove('success');
    box.classList.remove('failure');
}

function compare(value) {
    if (value.length < 1) return;
    if (value.toLowerCase() === 'chocolate') {
        box.classList.add('success');
        res.innerHTML = 'That is the correct answer!';
        return;
    }
    box.classList.add('failure');
    res.innerHTML = 'That is the wrong answer!';
}