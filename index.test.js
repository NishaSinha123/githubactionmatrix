const { add, multiply } = require('./index');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiplies 4 × 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
});

test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
});

test('multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
});