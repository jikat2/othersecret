const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

let endLoop = false;
let num;

console.log();

while (num % 1 !== 0 || num < MIN || num > MAX) {
    num = Number(readlineSync.question("Positive integer: "));
}

let added = 1;
let  num1= 0;
let num2 = 1;

for (let i = 2; i <= num; i++) {
    added = num1 + num2;
    num1 = num2;
    num2 = added;
}

formatted = added.toLocaleString("en");
console.log("\n" + formatted + ".\n");
