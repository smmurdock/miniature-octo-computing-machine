"use strict";

// define functions
const calcAverage = (val1, val2, val3) => { return (val1 + val2 + val3) / 3};

const checkWinner = (team1Avg, team2Avg) => {
    if (team1Avg >= 2 * team2Avg) {
        return `Dolphins win! (${team1Avg} vs ${team2Avg})`;
    } else if (team2Avg >= 2 * team1Avg) {
        return `Koalas win! (${team2Avg} vs ${team1Avg})`;
    } else {
        return "No team won definitively by at least double the average score.";
    }
};

// test 1 calcAverage()
console.log(calcAverage(3, 4, 5));

let avgScoreDolphins = calcAverage(44, 23, 71);
let avgScoreKoalas = calcAverage(85, 54, 41);

console.log(avgScoreDolphins, avgScoreKoalas);

// test checkWinner()
console.log(checkWinner(avgScoreDolphins, avgScoreKoalas));
console.log(checkWinner(576, 111));

// test 2 calcAverage()
avgScoreDolphins = calcAverage(85, 54, 41);
avgScoreKoalas = calcAverage(65, 54, 49);
console.log(avgScoreDolphins, avgScoreKoalas);
console.log(checkWinner(avgScoreDolphins, avgScoreKoalas));

// test 3 calcAverage()
avgScoreKoalas = calcAverage(23, 34, 27);
console.log(avgScoreDolphins, avgScoreKoalas);
console.log(checkWinner(avgScoreDolphins, avgScoreKoalas));