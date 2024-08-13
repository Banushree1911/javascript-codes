function countDigits(str) {
    let digitCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            digitCount++;
        }
    }
    return digitCount;
}


let text = "Hello 123, the number is 4567!";
let digitCount = countDigits(text);
console.log(digitCount); 
