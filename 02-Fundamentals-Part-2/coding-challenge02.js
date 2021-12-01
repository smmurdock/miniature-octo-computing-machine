"use strict";

// Coding challenge 2

// Build a tip calculator with the same rules as before:
// Tip 15% of the bill if the bill is between 50 and 300
// Otherwise, tip 20%

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above.
// Use whatever function type you like the most. Test the function using a bill value of 100

// 2. Now let's add arrays. Create an array 'bills' containing the test data:
// 125, 555, 44

// 3. Create an array 'tips' containing the bill tip value for each bill, calculated from the calcTip() function

// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip

const calcTip = function (bill_amt) {
  if (bill_amt >= 50 && bill_amt <= 300 {
    return bill_amt * 0.15;
  } else {
    return bill_amt * 0.2;
  }
};

// alternate function syntax
// use of ternary operator
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
*/

// given value of the bills
const bills = [125, 555, 44];
// calculated values of the tips
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// calculated values of bills + tips
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// test 1 - function logic
/*
const calcTip = function (bill_amt) {
  if (bill_amt >= 50 && bill_amt <= 300) {
    return bill_amt * 0.15;
  }
};
*/
console.log(calcTip(100));

// test 2 - function logic
/*
const calcTip = function (bill_amt) {
  if (bill_amt >= 50 && bill_amt <= 300) {
    return bill_amt * 0.15;
  } else {
    return bill_amt * 0.2;
  }
};
*/
console.log(calcTip(125));
console.log(calcTip(44));
console.log(calcTip(555));

// test 3 - function accepts array values by individual index
console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));

// test 4 - check values of bills vs tips
console.log(bills, tips);

// test 5 - check calulated values of totals
console.log(total);

// NOTE: if one doesn't need the return values of the tips, the math could be changed and the 'tips' array could be eliminated by returning 'bill_amt * 1.15' or 'bill_amt * 1.2' as a result of the condition
