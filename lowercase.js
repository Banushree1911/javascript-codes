function countLowercaseLetters(str) {
    let count = 0;

    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            count++;
        }
    }

    return count;
}

const result = countLowercaseLetters("Hello World!");
console.log(result); 
