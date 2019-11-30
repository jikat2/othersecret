const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

let height;


console.log();

while (height % 1 !== 0 || height < MIN || height > MAX) {
    height = Number(readlineSync.question("Height: "));
}

console.log();

let currentLevel = 1
while (currentLevel <= height) {
    level = "";

    for (let i = 0; i <= height - (currentLevel + 1); i++) {
        level = level + " ";
    }
    for (let i = 0; i < (currentLevel + 1); i++) {
        level = level + "#";
    }
    level = level + "  ";
    for (let i = 0; i < (currentLevel + 1); i++) {
        level = level + "#";
    }

    console.log(level);
    currentLevel++;
}

console.log();
