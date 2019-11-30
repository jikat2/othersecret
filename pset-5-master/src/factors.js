const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let num = -1;

console.log();

while (num % 1 !== 0 || num < MIN || num > MAX) {
    num = Number(readlineSync.question("Positive integer: "));
}

let factors = "";


for (let i = 1; i <= Math.sqrt(num); i++) {
  if(num % i == 0){
    if(i == Math.sqrt(num)){
      factors = factors + i + ".";
    }
    else{
      factors = factors + i + ", " + num/i + ", ";
    }
  }
}
factors = factors.replace(/,\s*$/, ".");


console.log("\n" + factors + "\n");
