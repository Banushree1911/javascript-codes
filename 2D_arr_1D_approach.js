function isNumberPresentIn2DArray(arr2D, number) {
    for (let i = 0; i < arr2D.length; i++) {
        for (let j = 0; j < arr2D[i].length; j++) {
            if (arr2D[i][j] === number) {
                return true;
            }
        }
    }
    return false;
}

let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let numberToFind = 5;
let isPresent = isNumberPresentIn2DArray(array2D, numberToFind);
console.log(isPresent); 
