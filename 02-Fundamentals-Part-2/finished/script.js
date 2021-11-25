'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

/*******************************************
 *******************************************
*/

/*
function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

// --
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// --
Number('23')
*/

/*******************************************
 *******************************************
*/

/*
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*******************************************
 *******************************************
*/

/*
// what we've seen so far - function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear; // 1 param
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {   // 2+ params
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*******************************************
 *******************************************
*/

/*
// what we've seen so far - an example with multiple inputs
// function foodProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// Functions calling other functions
// we need a function that can cut the fruits into smaller pieces to feed to the food processor
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple slices and ${orangePieces} orange slices.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

/*******************************************
 *******************************************
*/

/*
// Reviewing Functions

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;

//     return `${firstName} will retire in ${retirement} years`;
// }

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} will retire in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }

    // return `${firstName} will retire in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Deborah'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*******************************************
 *******************************************
*/

// CODING CHALLENGE #1
