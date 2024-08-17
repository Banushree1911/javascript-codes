function sumOfSquares(arr) {
    let sum = 0;

    for (let element of arr) {
        sum += element * element;
    }

    return sum;
}
const array = [1, 2, 3, 4];
const result = sumOfSquares(array);
console.log(result); 
