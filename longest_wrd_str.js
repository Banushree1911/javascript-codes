function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

let sentence = "Vivekanandha College of Engineering";
let longest = findLongestWord(sentence);
console.log(longest); 
