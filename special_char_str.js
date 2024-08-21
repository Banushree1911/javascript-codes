function containsSpecialCharacters(str) {
    const specialCharPattern = /[!@#\$%\^\&*\)\(+=._-]+/g;
    return specialCharPattern.test(str);
}

const inputString1 = "HelloWorld!";
const inputString2 = "HelloWorld123";

console.log(containsSpecialCharacters(inputString1)); 
console.log(containsSpecialCharacters(inputString2)); 
