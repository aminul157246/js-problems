const numbers = [1, 3, 4, 3, 5, 1]

const duplicates = numbers.filter(function (value, index, array) {

    return array.indexOf(value) !== index;

})

console.log(duplicates);
