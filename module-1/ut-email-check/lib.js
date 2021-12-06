function containsAt(text) {
    return text.indexOf('@') > -1;
}

function containsAtAndNoSpace(text) {
    return text.indexOf(' ') < 0 && text.indexOf('@') > -1;
}

function containsAtAndNoSpaceAndDots(text) {
    if (text.indexOf(' ') > -1) return false;
    const firstDot = text.indexOf('.'), at = text.indexOf('@'), lastDot = text.lastIndexOf('.');
    if (firstDot < 0 || at < 0 || lastDot < 0) return false;
    return firstDot < at && at < lastDot;
}