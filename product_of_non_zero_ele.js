function productOfNonZeroElements(arr) {
    let product = 1;
    let hasNonZero = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            product *= arr[i];
            hasNonZero = true;
        }
    }

    return hasNonZero ? product : 0;
}


let numbers = [1, 0, 3, 0, 5];
let product = productOfNonZeroElements(numbers);
console.log(product); 
