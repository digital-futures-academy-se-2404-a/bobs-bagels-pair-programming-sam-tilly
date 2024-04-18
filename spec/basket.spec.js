import { assertEquals } from "../spec/test-framework/test-framework.js"
import basket from "../src/basket.js"

//? TEST 1
//* Add item to basket using addItem and expect that length of basket.contents has increased by 1

console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Add item to basket using addItem and expect that length of basket.contents has increased by 1`
);


// Arrange
let expected = basket.basketContents.length + 1;
let actual, result;
let testItem = {};

// Act
basket.addItem(testItem);
actual = basket.basketContents.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
