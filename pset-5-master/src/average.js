const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let endcondition = false;
let num = 0;
let sum = 0;
let totalNumbers = 0;

console.log();

while (endcondition === false) {
    let num = Number(readlineSync.question("Non-negative integer: "));

    if (num % 1 !== 0 || num > MAX) {
    }
    else if (num < MIN) {
      if(totalNumbers > 0){
        endcondition = true;
      }
    }
    else {
        sum = sum + num; //There can be errors here if sum is greater than the mximum safe integer.
        totalNumbers++;
    }
}

console.log("\n" + (sum / totalNumbers).toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3}) + ".\n");
