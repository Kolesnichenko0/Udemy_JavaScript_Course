const lines = 5;
let result = '';

// Loop to generate each line of the pyramid
for (let spaces = lines, stars = 1; spaces >= 0; spaces--, stars += 2) {
    result += ' '.repeat(spaces); // Add leading spaces
    result += '*'.repeat(stars);  // Add stars
    result += '\n';               // New line
}

console.log(result);