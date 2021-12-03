/*
 * TESTS
 */

QUnit.test('Add score', function(assert) {
    addScore(1000);
    assert.ok(model.scoreboard.length > 0);
});

QUnit.test('Buy upgrade - failure', function(assert) {
    model.points = 0;
    buyUpgrade('autoClick');
    assert.equal(model.autoClick, false);
});

QUnit.test('Buy upgrade - success', function(assert) {
    model.points = 500;
    buyUpgrade('autoClick');
    assert.ok(model.autoClick);
});

QUnit.test('Cheat message', function(assert) {
    cheat();
    assert.equal(model.message, 'You cheated!');
});

QUnit.test('Emoji type', function(assert) {
    model.emojiType = 1;
    assert.deepEqual(model.emoji[model.emojiType], ['😼', '🙀', '😸', '😻', '😿']);
});

QUnit.test('Emoji state', function(assert) {
    model.emojiType = 1;
    model.emojiState = 3;
    assert.equal(model.emoji[model.emojiType][model.emojiState], '😻');
});