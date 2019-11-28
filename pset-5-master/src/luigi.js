const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

let height;
let pyramidStepLeft;
let pyramidStepRight;

console.log();

do {
    height = Number(readlineSync.question("Height: "));
} while (Number.isNaN(height) || height % 1 !== 0 || height < MIN || height > MAX);

console.log();

let currentLevel = height;

while (currentLevel > 0) {
    pyramidStepLeft = "";
    pyramidStepRight = "";

    for (let i = 0; i <= height; i++) {
        pyramidStepLeft = pyramidStepLeft + "#";
    }
    for (let i = 0; i < currentLevel - 1; i++) {
        pyramidStepLeft = pyramidStepLeft.replace(pyramidStepLeft.charAt(i), " ");
    }
    for (let i = currentLevel - 2; i < height; i++) {
        pyramidStepRight = pyramidStepRight + "#";
    }

    console.log(pyramidStepLeft + " " + pyramidStepRight);
    currentLevel--;
}

console.log();
