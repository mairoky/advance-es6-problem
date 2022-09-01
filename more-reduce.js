/*
const people = [
    { name: 'Meena', age: 18 },
    { name: 'Rina', age: 19 },
    { name: 'Tine', age: 20 }
];
Challenging Follow above array of objects.So, you have 3 objects as
array element.Can you find out the total sum from here ?
20 + 15 + 22 = 57.The output will be 57
What are you thinking ? Yeah! Do it with for loop.I know you can do it.
But! Wait!! Wait!!! Do the same task using array.reduce() method.
*/
const people = [
    { name: 'Meena', age: 18 },
    { name: 'Rina', age: 19 },
    { name: 'Tine', age: 20 }
];

let sumOfAge = 0;
// using for loop
for (const element of people) {
    sumOfAge = sumOfAge + element.age;
}
console.log(sumOfAge);

// using .reduce method
const age = people.map(element => element.age);
const addAllAge = (total, element) => total + element;
const result = age.reduce(addAllAge, 0);
console.log(result);
