const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let num;

console.log();

do {
    num = Number(readlineSync.question("Positive integer: "));
} while (Number.isNaN(num) || num % 1 !== 0 || num < MIN || num > MAX);

let factors = "";
let factorLimit = num;
let smallFactor;
let largeFactor;
var lastComma = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0 && num / i === i) {
        largeFactor = i;
        factors = factors + largeFactor + ", ";
    }
    else if (num % i === 0 && i < factorLimit) {
        smallFactor = i;
        largeFactor = num / i;
        factorLimit = largeFactor;
        factors = factors + smallFactor + ", " + largeFactor + ", ";
    }
    if (i >= factorLimit) {
        if(i == 1){
          lastComma = String(largeFactor) + ", ";
          factors = factors.replace(lastComma, String(largeFactor) + ".");
        }
        else{
          lastComma = " " + String(largeFactor) + ", ";
          factors = factors.replace(lastComma, " " + String(largeFactor) + ".");
        }
        break;
    }
}


console.log("\n" + factors + "\n");
