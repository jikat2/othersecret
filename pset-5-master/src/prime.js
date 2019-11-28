const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let endLoop = false;
let num = null;

console.log();

while (endLoop === false) {
    let input = readlineSync.question("Non-negative integer: ");
    num = Number(input);

    if (Number.isNaN(num) || input === "" || num % 1 !== 0 || num < MIN || num > MAX) {
    }
    else {
        endLoop = true;
    }
}

let primeNumber = "Prime";

if (num === 0 || num === 1) {
    primeNumber = "Not Prime";
}

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        primeNumber = "Not Prime";
        break;
    }
}

console.log("\n" + primeNumber + ".\n");
