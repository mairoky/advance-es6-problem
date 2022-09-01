/*
You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/

const oddArray = [1, 3, 5, 7, 9];
const evenArray1 = [];
const evenArray2 = [];

// using for loop
for (let i = 0; i < oddArray.length; i++) {
    evenArray1.push(oddArray[i] + 1);
}
console.log(evenArray1);

// using for of loop
for (const element of oddArray) {
    evenArray2.push(element + 1)
}
console.log(evenArray2);

// using array.map()
const evenArray3 = oddArray.map(n => n + 1);
console.log(evenArray3);

// using arrow function & .map method
const makeEven = num => num + 1;
const evenArray4 = oddArray.map(makeEven);
console.log(evenArray4);