"use strict";

// Built-in functions for arrays (methods)

const friends = ["Michael", "Steven", "Peter"];

// ADD ELEMENTS TO AN ARRAY
// 1. add element(s) to the end of an array
friends.push("Jay");
console.log(friends);
// 2. add new element to beginning of array
friends.unshift("John");
console.log(friends);

// REMOVE ELEMENTS FROM AN ARRAY
// 1. remove element from end of array
friends.pop(); // no argument needed
const popped = friends.pop(); // value is returned and can be stored as a variable
console.log(popped);
console.log(friends);
// 2. remove first element
friends.shift();
console.log(friends);

// FIND INDEXES OF VALUES
// 1. find index of an existing value
console.log(friends.indexOf("Steven"));
// 2. find index of a non-existing value
// ** should return -1
console.log(friends.indexOf("Bob"));

// RETURN BOOLEAN BASED ON EXISTENCE OF VALUE
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
friends.push(23);
console.log(friends.includes("23")); // tests against strict equality (===)
console.log(friends.includes(23));

// Alternate way of checking for existence of a value
if (friends.includes("Peter")) {
    console.log("You have a friend called Peter.");
}