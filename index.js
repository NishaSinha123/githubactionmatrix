// Simple calculator
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Export for testing
module.exports = { add, multiply };

// Run if called directly
if (require.main === module) {
    console.log("2 + 3 =", add(2, 3));
    console.log("4 × 5 =", multiply(4, 5));
}