function countUniqueCharacters(str) {
    const uniqueChars = new Set(str);
    return uniqueChars.size;
}

const inputString = "hello world";
const uniqueCharCount = countUniqueCharacters(inputString);

console.log(uniqueCharCount); 
