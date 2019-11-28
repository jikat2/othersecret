const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let endLoop = false;
let num = null;

console.log();

while (endLoop === false) {
    num = Number(readlineSync.question("Positive Integer: "));

    if (Number.isNaN(num) || num % 1 !== 0 || num < MIN || num > MAX) {
    }
    else {
        endLoop = true;
    }
}

let sum = 0;
const LENGTH = String(num).length;

for (let i = 0; i < LENGTH; i++) {
    let splitNumber = num % 10;
    (splitNumber % 2 !== 0) ? sum = sum + splitNumber : sum += 0;
    num = Math.floor(num / 10);
}

console.log("\n" + sum + ".\n");
