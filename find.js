/*
Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = num => num % 10 === 0;
const divisible = numbers.find(divisibleByTen);
console.log(divisible);