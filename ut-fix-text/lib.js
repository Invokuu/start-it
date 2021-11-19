function fixText(text) {
    // Forcing lowercase to also potentially deal with "TERJE"
    // However, this does not deal with uppercasing first letter of multiple words
    text = text.trim().toLowerCase();
    return text.charAt(0).toUpperCase() + text.substr(1);
}