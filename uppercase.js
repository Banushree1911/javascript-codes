function containsUppercase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            return true;
        }
    }
    return false;
}

let text = "Hello World";
let hasUppercase = containsUppercase(text);
console.log(hasUppercase);
