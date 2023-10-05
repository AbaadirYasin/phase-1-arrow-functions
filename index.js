// Function expression called divide
const divide = function() {
    return 2000 / 100;
  }
  
  // Arrow function called square
  const square = (x) => {
    return x * x;
  }
  
  // Arrow function called add
  const add = (x, y) => {
    return x + y;
  }
  
  // Export the functions (if needed)
  module.exports = {
    divide,
    square,
    add
  };
  