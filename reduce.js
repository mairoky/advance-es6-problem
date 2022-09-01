/*
You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/

const numbers = [1, 9, 17, 22];
let addAllNumber = 0;
// using for loop
for (const number of numbers) {
    addAllNumber = addAllNumber + number;
}
console.log(addAllNumber);

// using .reduce method
const getSumOfElement = (total, number) => total + number;
const result = numbers.reduce(getSumOfElement, 0);
console.log(result);
