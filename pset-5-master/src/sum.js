const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerbound = null;
let upperbound = null;
let sum = 0;

console.log();

while (lowerbound % 1 !== 0 || upperbound % 1 !== 0 || lowerbound < MIN || upperbound > MAX || lowerbound >= upperbound) {
    lowerbound = Number(readlineSync.question("Lower bound: "));
    upperbound = Number(readlineSync.question("Upper bound: "));
}

for(let i = lowerbound; i <= upperbound; i++){
  if(i % 2 == 0){
    sum = sum + i;
  }
}

const formattedsum = sum.toLocaleString("en");
console.log("\n" + formattedsum + ".\n");
