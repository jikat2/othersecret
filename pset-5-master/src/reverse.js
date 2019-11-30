const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let num = 0;
let currentdigit = 0;
let numWithoutDigit = 0;
let result = "";


console.log();

while (num % 1 !== 0 || num <= MIN || num > MAX) {
    num = Number(readlineSync.question("Positive integer: "));
}

while(num>=1){
  numWithoutDigit = Math.floor(num/10) * 10;
  currentdigit = num - numWithoutDigit;
  num = numWithoutDigit/10
  if(num < 1){
    result = result + currentdigit + ".";
  }
  else{
    result = result + currentdigit + ", ";
  }
}

console.log("\n" + result + "\n");
