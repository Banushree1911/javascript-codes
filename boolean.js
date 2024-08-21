//Simple boolean values
let isSunny = true;
let isRaining = false;

console.log(isSunny);  
console.log(isRaining);


let temperature = 25;
let isWarm = temperature > 20;

console.log(isWarm);


if (isWarm) {
    console.log("It's warm outside."); 
} else {
    console.log("It's cold outside.");
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(7)); 
