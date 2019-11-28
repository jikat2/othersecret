const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let endLoop = false;
let positiveInteger = null;

console.log();

while (Number.isNaN(positiveInteger) || positiveInteger % 1 !== 0 || positiveInteger < MIN || positiveInteger > MAX) {
    positiveInteger = Number(readlineSync.question("Positive Integer: "));
}

let reverseNumber = "";
const LENGTH = String(positiveInteger).length;

for (let i = LENGTH; i > 0; i++) {
    let splitNumber = positiveInteger/(10**i);
    positiveInteger = Math.floor(positiveInteger / 10);
    (i + 1 == LENGTH) ? reverseNumber = reverseNumber + String(splitNumber + ".") : reverseNumber = reverseNumber + String(splitNumber) + ", ";
}

console.log("\n" + reverseNumber + "\n");
