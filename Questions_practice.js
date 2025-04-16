function computeFactorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * computeFactorial(num - 1);
}

let fruits = ['mango', 'banana', 'apple'];
let permutationCounts = [];

for (let idx = 0; idx < fruits.length; idx++) {
    let fruit = fruits[idx];
    let letterFrequency = {};

    for (let letter of fruit) {
        if (letterFrequency[letter]) {
            letterFrequency[letter]++;
        } else {
            letterFrequency[letter] = 1;
        }
    }

    let totalArrangements = computeFactorial(fruit.length);
    for (let letter in letterFrequency) {
        totalArrangements /= computeFactorial(letterFrequency[letter]);
    }

    permutationCounts.push(totalArrangements);
}

console.log(permutationCounts);
