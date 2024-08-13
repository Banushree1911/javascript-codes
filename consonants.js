function countConsonants(str) {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (consonants.includes(str[i])) {
            count++;
        }
    }

    return count;
}
let text = "Hello World!";
let consonantCount = countConsonants(text);
console.log(consonantCount); 
