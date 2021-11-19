QUnit.test("fix - 'terje'", function (assert) {
    const actual = fixText('terje');
    const expected = 'Terje';
    assert.equal(actual, expected);
});

QUnit.test("fix - 'terje '", function (assert) {
    const actual = fixText('terje ');
    const expected = 'Terje';
    assert.equal(actual, expected);
});

QUnit.test("fix - ' terje'", function (assert) {
    const actual = fixText(' terje');
    const expected = 'Terje';
    assert.equal(actual, expected);
});

QUnit.test("fix - ' terje '", function (assert) {
    const actual = fixText(' terje ');
    const expected = 'Terje';
    assert.equal(actual, expected);
});