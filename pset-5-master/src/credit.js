const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 9999999999999999;

let num = 0;
let currentdigit = 0;
let numWithoutDigit = 0;
let result = "";
let count = 0;
let evensum = 0;
let oddsum = 0;
let firstdigit = 0;
let seconddigit = 0;


console.log();

while (num % 1 !== 0 || num <= MIN || num > MAX) {
    num = Number(readlineSync.question("Number: "));
}

while(num>=1){
  numWithoutDigit = Math.floor(num/10) * 10;
  currentdigit = num - numWithoutDigit;
  num = numWithoutDigit/10;
  count = count + 1;
  if(num < 1){
    firstdigit = currentdigit;
  }
  else if(num < 10){
    seconddigit = currentdigit;
  }
  if(count % 2 == 1){
    oddsum = oddsum + currentdigit;
  }
  else{
    currentdigit = currentdigit * 2;
    if(currentdigit >= 10){
      evensum = evensum + currentdigit - 9;
    }
    else{
      evensum = evensum + currentdigit;
    }
  }
}

let totalsum = evensum + oddsum;

if(totalsum % 10 == 0){
  if(count == 15 && firstdigit == 3 && (seconddigit == 4 || seconddigit == 7)){
    console.log("Amex.");
  }
  else if(count == 16 && firstdigit == 5 && seconddigit < 6 && seconddigit > 0){
    console.log("Mastercard.");
  }
  else if((count == 13 || count == 16) && firstdigit == 4){
    console.log("Visa.");
  }
  else{
    console.log("Invalid.");
  }
}
else{
  console.log("Invalid.");
}
