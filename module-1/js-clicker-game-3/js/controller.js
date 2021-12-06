/*
 * CONTROLLER
 */

function handleClick() {
    if (!model.interval) startTimer();
    model.clicks++;
    model.points += model.pointsIncrement;
    model.emojiState = ++model.emojiState < model.emoji[model.emojiType].length ? model.emojiState : 0;
    render();
}

function addScore(score) {
    model.scoreboard.push({
        time: new Date(),
        score: score
    });
}

function buyUpgrade(name) {
    // Checks if upgrade doesn't exist, if it's not available or if we don't have enough
    if (!(name in model.upgrades)
    || model.upgrades[name].available === 0
    || model.points < model.upgrades[name].cost) return;
    // Everything checks out, we can continue
    if (model.upgrades[name].available) model.upgrades[name].available--;
    model.points -= model.upgrades[name].cost;
    // Run associated function and then render
    model.upgrades[name].fn();
    render();
}

function isAvailable(name) {
    return name in model.upgrades && model.upgrades[name].available !== 0;
}

function upgradeClick() {
    model.pointsIncrement++;
}

function upgradeEmoji() {
    model.emojiType++;
    model.emojiState = 0;
}

function upgradeAutoClick() {
    model.autoClick = true;
}

function reset() {
    addScore(model.points);
    model.points = 0;
    model.time = 0;
    model.clicks = 0;
    model.cps = 0;
    model.pointsIncrement = 1;
    model.autoClick = false;
    model.message = '';
    model.emojiType = 0;
    model.emojiState = 0;
    model.upgrades.emoji.available = 1;
    model.upgrades.autoClick.available = 1;
    clearInterval(model.interval);
    delete model.interval;
    render();
}

function cheat() {
    model.points *= 10;
    model.pointsIncrement *= 10;
    model.message = 'You cheated!';
    render();
}

function startTimer() {
    model.interval = setInterval(() => {
        if (model.autoClick) {
            model.points += model.pointsIncrement;
        }
        model.time++;
        render();
    }, 1000);
}

function decimal3(num) {
    return Math.floor(num * 1000) / 1000;
}