const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let endLoop = false;
let positiveInteger = null;
let factors = "";
let prime = true;

console.log();

while (Number.isNaN(positiveInteger) || positiveInteger % 1 !== 0 || positiveInteger < MIN || positiveInteger > MAX) {
    positiveInteger = Number(readlineSync.question("Positive integer: "));
}

let largestFactor = 1;
for (let i = 0; i < positiveInteger; i++) {
    if(positiveInteger % i == 0){
      prime = true;
      for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j == 0){
          prime = false;
        }
      }
      if(prime == true && i !== 1){
        if(i > largestFactor){
          largestFactor = i;
        }
      }
    }
}
for (let i = 0; i < positiveInteger; i++) {
    if(positiveInteger % i == 0){
      prime = true;
      for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j == 0){
          prime = false;
        }
      }
      if(prime == true && i !== 1){
        if(i == largestFactor){
          factors = factors + i + ".";
        }
        else{
          factors = factors + i + ", ";
        }
      }
    }
}
console.log("\n" + factors + "\n");
