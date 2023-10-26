// Exercise 1

const foods = [];

// Exercise 2

foods.push('pizza', 'cheeseburger');

// Exercise 3

foods.unshift('taco');

// Exercise 4

const favFood = foods[1];

// Exercise 5

foods.splice(2, 0, 'tofu');

// Exercise 6

const pizzaIndex = foods.indexOf('pizza');

foods.splice(pizzaIndex, 1, 'sushi', 'cupcake');

// Exercise 7

const yummy = foods.slice(1, 3);

// Exercise 8

const soyIdx = foods.indexOf('tofu');

// Exercise 9

const allFoods = foods.join(' -> ');

// Exercise 10

const hasSoup = foods.includes('soup');

// Define the nums array

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Exercise 11

const odds = [];

nums.forEach((num) => {

if (num % 2 !== 0) {

odds.push(num);

}

});

// Exercise 12

const fizz = [];

const buzz = [];

const fizzbuzz = [];

nums.forEach((num) => {

if (num % 3 === 0 && num % 5 === 0) {

fizzbuzz.push(num);

} else if (num % 3 === 0) {

fizz.push(num);

} else if (num % 5 === 0) {

buzz.push(num);

}

});


const numArrays = [

[100, 5, 23],

[15, 21, 72, 9],

[45, 66],

[7, 81, 90]

];

// Exercise 13

const numList = numArrays[numArrays.length - 1];

// Exercise 14

const num = numArrays[2][1]; 

// Exercise 15

let total = 0;

numArrays.forEach((innerArray) => {

innerArray.forEach((num) => {

total += num;

});

});

// Print the results

console.log('Exercise 2 Result:\n', foods);

console.log('Exercise 3 Result:\n', foods);

console.log('Exercise 4 Result:\n', favFood);

console.log('Exercise 5 Result:\n', foods);

console.log('Exercise 6 Result:\n', foods);

console.log('Exercise 7 Result:\n', yummy);

console.log('Exercise 8 Result:\n', soyIdx);

console.log('Exercise 9 Result:\n', allFoods);

console.log('Exercise 10 Result:\n', hasSoup);

console.log('Exercise 11 Result:\n', odds);

console.log('Exercise 12 Results:');

console.log(' fizz:', fizz);

console.log(' buzz:', buzz);

console.log(' fizzbuzz:', fizzbuzz);

console.log('Exercise 13 Result:\n', numList);

console.log('Exercise 14 Result:\n', num);

console.log('Exercise 15 Result:\n', total);