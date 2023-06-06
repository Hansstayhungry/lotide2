const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Tail array to pass in
const tailResult = tail(["Hello", "Lighthouse", "Labs"]);

// Test Case 1: Check the returned array elements
assertEqual(tailResult.length, 2); // ensure we get back two elements
assertEqual(tailResult[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(tailResult[1], "Las"); // ensure second element is "Labs"

console.log("---");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!