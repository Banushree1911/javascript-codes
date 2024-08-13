function findFirstRepeatedCharacter(str) {
    const seen = new Set();

    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            return str[i];
        }
        seen.add(str[i]);
    }

    return null; 
}

// Example usage:
let text = "swiss";
let firstRepeated = findFirstRepeatedCharacter(text);
console.log(firstRepeated); 
