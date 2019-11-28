const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let endLoop = false;
let num = null;
let sum = 0;
let totalNumbers = 0;

console.log();

while (endLoop === false) {
    let input = readlineSync.question("Non-negative Integer: ");
    num = Number(input);

    if (Number.isNaN(num) || input === "" || num > MAX) {
    }
    else if (num < MIN) {
        endLoop = true;
    }
    else {
        sum = sum + num;
        totalNumbers++;
    }
}

let average = (sum / totalNumbers).toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3});
console.log("\n" + average + ".\n");
