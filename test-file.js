import { assertEquals } from "./test-framework.js";
import { addToBasket } from "./index.js";
//? Adds Item to Basket
// Arrange
let item = "bagel";
let expected = ["bagel"];
let actual, result;

// Act

actual = addToBasket(item);

// Assert

result = assertEquals(actual, expected);

// Report

console.log("Adds to basket:");
console.log(`Test result: ${result}`);
