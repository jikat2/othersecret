const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 9999999999999999;

let num;

console.log();

do {
    num = Number(readlineSync.question("Number: "));
} while (Number.isNaN(num) || num % 1 !== 0 || num < MIN || num > MAX);

let creditCardString = String(num);
let creditCardLength = creditCardString.length;
let checkSum = 0;

for (let i = creditCardLength - 2; i >= 0; i = i - 2) {
    let digit = creditCardString.charAt(i); // Takes every other digit
    let digitTimesTwo = Number(digit) * 2; // Multiplies digit by two
    let digitString = String(digitTimesTwo);
    let digitStringLength = digitString.length;
    if (digitStringLength > 1) { // Adds the two digits of the digit * 2 if it is 2 digits long
        let a = Number(digitString.charAt(0));
        let b = Number(digitString.charAt(1));
        checkSum = checkSum + a + b;
    }
    else { // If digit is only 1 digit long, just add it immediately
        checkSum = checkSum + digitTimesTwo;
    }
}

for (let i = creditCardLength - 1; i >= 0; i = i - 2) {
    let otherDigit = creditCardString.charAt(i); // Takes digits unaccounted for
    let otherDigitNumber = Number(otherDigit);
    checkSum = checkSum + otherDigitNumber;
}

const CHECK_SUM_STRING = String(checkSum);
const LAST_NUMBER_INDEX = CHECK_SUM_STRING.length - 1;
const LAST_NUMBER = CHECK_SUM_STRING.charAt(LAST_NUMBER_INDEX);

if (LAST_NUMBER == "0") { // If card is checkable, it runs the rest of the code
    if (creditCardLength == 15 && creditCardString.charAt(0) == "3" && (creditCardString.charAt(1) == "4" || creditCardString.charAt(1) == "7")) {
        console.log("\nAmex.");
    }
    else if (creditCardLength == 16 && creditCardString.charAt(0) == "5" && (creditCardString.charAt(1) == "1" || creditCardString.charAt(1) == "2" || creditCardString.charAt(1) == "3" || creditCardString.charAt(1) == "4" || creditCardString.charAt(1) == "5")) {
        console.log("\nMastercard.");
    }
    else if (creditCardLength >= 13 && creditCardLength <= 16 && creditCardString.charAt(0) == "4") {
        console.log("\nVisa.");
    }
    else {
        console.log("\nInvalid.");
    }
}
else {
    console.log("\nInvalid.");
}
