import { assertEquals } from "../spec/test-framework/test-framework.js"
import basket from "../src/basket.js"

//? TEST 1
//* Add item to basket using addItem and expect that length of basket.contents has increased by 1

console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Add item to basket using addItem and expect that length of basket.contents has increased by 1`
);

const clearUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testItem = {};
    basket.basketContents = [];
}


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

//Clear Up
clearUp();
console.log(`==================`);


//? TEST 2
//* Verify that the item we tried to add is in the basket

console.log(`Test 2`);
console.log(`==================`);
console.log(
    `Add item to basket using addItem and check if the item added is in the basket`
);

//Arrange
expected = true;

//Act
basket.addItem(testItem);
actual = basket.basketContents.includes(testItem);

//Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);

//Clear Up
clearUp();
console.log(`==================`);

//? TEST 3
//* Verify that can add to a basket with existing items

console.log(`Test 3`);
console.log(`==================`);
console.log(
    `Verify that can add to a basket with existing items`
);

// Arrange
let originalItem = {};
basket.basketContents.push(originalItem);
expected = basket.basketContents.length + 1;

// Act
basket.basketContents.push(testItem);
actual = basket.basketContents.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);

// Clean Up
clearUp();

