'use strict';

// Arrays

// what we know how to do so far, which is not an effective way of storing multiple values of the same or related concept
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// using arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// another way of setting up an array
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// log first item in the array
console.log(friends[0]);
// log Peter by index position
console.log(friends[2]);
// find length of array by number of values
console.log(friends.length);
// find last item in the array
console.log(friends[friends.length - 1]);

// replace a value
friends[2] = 'Jay';
console.log(friends);

// arrays are immutable; individual values can be changed and values can be added or removed but the entire array cannot be reassigned

// js arrays can hold multiple data types including nested arrays
const lastName = 'Schmedtmann';
const jonas = ['Jonas', lastName, 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
};
const years2 = [1990, 1967, 2002, 2010, 2018];

// this won't work as is
// console.log(calcAge(years2));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// it's a good practice that if you're using an array to return multiple values, you create a new array to store those values
const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1])
];
console.log(ages);