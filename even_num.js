function allEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

let numbers = [2, 4, 6, 8];
let areAllEven = allEven(numbers);
console.log(areAllEven); 
