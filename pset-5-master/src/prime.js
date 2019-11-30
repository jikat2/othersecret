const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let isPrime = true;
let num = -1;

console.log();

while (num % 1 !== 0 || num < MIN || num > MAX) {
    num = Number(readlineSync.question("Non-negative integer: "));
}


if (num === 0 || num === 1) {
  console.log("\n Not prime.\n");
}
else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
          isPrime = false;
          break;
      }
  }
  if(isPrime == true){
    console.log("\n Prime.\n");
  }
  else{
    console.log("\n Not Prime.\n");
  }
}
