
const { add, multiply } = require('./index');

test('2 + 3 should be 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('4 × 5 should be 20', () => {
    expect(multiply(4, 5)).toBe(20);
});