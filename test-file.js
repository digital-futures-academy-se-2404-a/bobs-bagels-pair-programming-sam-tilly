import { assertEquals } from "./test-framework.js";
import { addToBasket } from "./index.js";
import { Bagel } from "./index.js";
import { Basket } from "./index.js";

//? Adds Item to Basket
// Arrange

const bagel1 = new Bagel(1);
const myBasket = new Basket();

let expected = [Bagel];
let actual, result;

// Act

actual = addToBasket(bagel1, myBasket);

// Assert

result = assertEquals(actual, expected);

// Report

console.log("Adds to basket:");
console.log(`Test result: ${result}`);
