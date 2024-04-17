import { assertEquals } from "./test-framework.js";
import { addToBasket } from "./index.js";
//? Adds Item to Basket
// Arrange
let bagel = "plain";
let expected = "plain";
let actual, result;

// Act

actual = addToBasket(bagel);

// Assert

result = assertEquals(actual, expected);

// Report

console.log("Adds to basket:");
console.log(`Test result: ${result}`);
