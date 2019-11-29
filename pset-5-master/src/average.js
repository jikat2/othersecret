const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let endLoop = false;
let num = null;
let sum = 0;
let totalNumbers = 0;

console.log();

while (endLoop === false) {
    let input = readlineSync.question("Non-negative integer: ");
    num = Number(input);

    if (Number.isNaN(num) || input === "" || input % 1 !== 0 || num > MAX) {
    }
    else if (num < MIN) {
      if(totalNumbers > 0){
        endLoop = true;
      }
    }
    else {
        sum = sum + num;
//Add comment here for case where many input numbers are > MAX_SAFE_INTEGER
        totalNumbers++;
    }
}

let average = (sum / totalNumbers).toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3});
console.log("\n" + average + ".\n");
