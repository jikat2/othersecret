const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

let height;
let pyramidStep;

console.log();

do {
    height = Number(readlineSync.question("Height: "));
} while (Number.isNaN(height) || height % 1 !== 0 || height < MIN || height > MAX);

console.log();

let currentLevel = height;

while (currentLevel > 0) {
    pyramidStep = "";

    for (let i = 0; i <= height; i++) {
        pyramidStep = pyramidStep + "#";
    }
    for (let i = 0; i < currentLevel - 1; i++) {
        pyramidStep = pyramidStep.replace(pyramidStep.charAt(i), " ");
    }

    console.log(pyramidStep);
    currentLevel--;
}

console.log();
