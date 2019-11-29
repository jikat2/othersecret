const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let num = null;
var LENGTH = 0;

console.log();

while (true) {
    num = Number(readlineSync.question("Positive integer: "));

    if (Number.isNaN(num) || num % 1 !== 0 || num < MIN || num > MAX) {
    }
    else {
        break;
    }
}

var num2 = num;
let sum = 0;
while(num2 >=1){
  num2 = num2/10;
  LENGTH = LENGTH + 1;
}

for (let i = 0; i < LENGTH + 1; i++) {
    let splitNumber = num % 10;
    if(splitNumber % 2 !== 0){
      sum += splitNumber;
    }
    num = Math.floor(num / 10);
}

console.log("\n" + sum + ".\n");
