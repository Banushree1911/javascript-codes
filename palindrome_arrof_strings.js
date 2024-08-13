function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function findFirstPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            return arr[i];
        }
    }
    return null; 
}
let words = ["hello", "world", "madam", "racecar"];
let firstPalindrome = findFirstPalindrome(words);
console.log(firstPalindrome); 
