function countSpaces(str) {
    let spaceCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            spaceCount++;
        }
    }
    return spaceCount;
}

let text = "Hello World!";
let spaces = countSpaces(text);
console.log(spaces); 
