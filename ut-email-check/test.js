QUnit.test("Contains @ - 'some.test@getacademy.no'", function (assert) {
    assert.ok(containsAt('some.test@getacademy.no'));
});

QUnit.test("Contains @ and no space - 'some.test@getacademy.no'", function (assert) {
    assert.ok(containsAtAndNoSpace('some.test@getacademy.no'));
});

QUnit.test("Contains @, no space and dots - 'some.test@getacademy.no'", function (assert) {
    assert.ok(containsAtAndNoSpaceAndDots('some.test@getacademy.no'));
});