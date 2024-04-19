// Total vowel exist on a sentence

// define vowels in an array
// count = 0
// By using Array.from() get all elements individually like("ABCDEFG"=A,B,C,D,E,F,G)
//  Apply for each in input sentences
// is include vowel these input sentences values
// count ++



const vowel = ['a', 'e', 'i', 'o', 'u']

function countVowels(sentence) {
    let count = 0;

    const letters = Array.from(sentence) // get all elements individually

    letters.forEach(function (value) {

        if (vowel.includes(value)) {
            count++
        }
    })

    return count;
}

console.log(countVowels("i love bangladesh"));