// Define a function named divide_Numbers that takes two parameters: x and y
function divide_Numbers(x, y) {
    try {
      if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('Invalid arguments. Both arguments should be numbers.');
      }
      if (y === 0) {
        throw new Error('Invalid divisor. Cannot divide by zero.');
      }
      const result = x / y;
      console.log('Result:', result);
    } catch (error) {
      console.log('Error:', error.message);
    } finally {
      console.log('Cleanup code executed.');
    }
  }

  divide_Numbers(10, 2);  //  Valid division
  divide_Numbers(10, 0); // Division by zero
  divide_Numbers(10, '2'); // Invalid divisor
  