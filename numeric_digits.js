function containsDigits(str) {
    for (let char of str) {
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}

const result = containsDigits("Hello123");
console.log(result); 
