// Expected result through all
const expected = 'Terje';

QUnit.test("fix - 'terje'", function (assert) {
    const actual = fixText('terje');
    assert.equal(actual, expected);
});

QUnit.test("fix - 'terje '", function (assert) {
    const actual = fixText('terje ');
    assert.equal(actual, expected);
});

QUnit.test("fix - ' terje'", function (assert) {
    const actual = fixText(' terje');
    assert.equal(actual, expected);
});

QUnit.test("fix - ' terje '", function (assert) {
    const actual = fixText(' terje ');
    assert.equal(actual, expected);
});