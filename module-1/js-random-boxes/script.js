const app = document.getElementById('app');

randomBox();

function randomBox() {
    const endX = randomNumber(window.innerWidth * 0.2, window.innerWidth),
          endY = randomNumber(window.innerHeight * 0.2, window.innerHeight),
          startX = randomNumber(1, endX * 0.8),
          startY = randomNumber(1, endY * 0.8);
    document.write(createElement(startX, startY, endX - startX, endY - startY, randomColor(), randomBetterWord()));
    if (Math.random() < 0.9) randomBox();
}

function createElement(x, y, width, height, color, content) {
    return `<div style="
            left: ${x}px;
            top: ${y}px;
            width: ${width}px;
            height: ${height}px;
            background-color: ${color};
            "><p>${content}</p></div>`;
}

function randomBetterWord() {
    return randomConsonant() + randomVowel() + randomConsonant() + randomVowel() + randomConsonant();
}

function randomWord() {
    return randomLetter() + randomLetter() + randomLetter() + randomLetter() + randomLetter();
}

function randomConsonant() {
    const number = randomNumber(0, 19);
    let char = 'B'.charCodeAt(0);
    if (number > 2) {
        char++;
    }
    if (number > 5) {
        char++;
    }
    if (number > 10) {
        char++;
    }
    if (number > 15) {
        char++;
    }
    if (number > 18) {
        char++;
    }
    return String.fromCharCode(char + number);
}

function randomVowel() {
    const number = randomNumber(0, 8);
    let char = 'A'.charCodeAt(0);
    if (number === 8) {
        return 'Å';
    } else if (number === 7) {
        return 'Ø';
    } else if (number === 6) {
        return 'Æ';
    }
    if (number > 0) {
        char += 3;
    }
    if (number > 1) {
        char += 3;
    }
    if (number > 2) {
        char += 5;
    }
    if (number > 3) {
        char += 5;
    }
    if (number > 4) {
        char += 3;
    }
    return String.fromCharCode(char + number);
}

function randomLetter() {
    const number = randomNumber(0, 28);
    if (number === 28) {
        return 'Å';
    } else if (number === 27) {
        return 'Ø';
    } else if (number === 26) {
        return 'Æ';
    }
    return String.fromCharCode('A'.charCodeAt(0) + number);
}

function randomColor() {
    return '#' +
        randomHexChar() +
        randomHexChar() +
        randomHexChar() +
        randomHexChar() +
        randomHexChar() +
        randomHexChar();
}

function randomHexChar() {
    const number = randomNumber(0, 15);
    if (number < 10) return number;
    return String.fromCharCode('A'.charCodeAt(0) + number - 10);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleOpacity() {
    if (document.body.classList.contains('see-through')) {
        document.body.classList.remove('see-through');
        return;
    }
    document.body.classList.add('see-through');
}