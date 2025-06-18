// Given array of numbers
const L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Method 1: Using a for loop to find sum
let sum = 0;
for (let i = 0; i < L.length; i++) {
    sum += L[i];
}
console.log("Sum using for loop:", sum);

// Method 2: Using reduce() to find sum
const sumUsingReduce = L.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum using reduce():", sumUsingReduce);

// Method 1: Using a for loop to find product
let product = 1;
for (let i = 0; i < L.length; i++) {
    product *= L[i];
}
console.log("Product using for loop:", product);

// Method 2: Using reduce() to find product
const productUsingReduce = L.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Product using reduce():", productUsingReduce);
