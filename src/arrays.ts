//Syntax 1
//keyword variableName = [value1, value2, value3]

//Syntax 2
//keyword variableName = new Array(value1, value2, value3);

const fruits = ["Apple", "Banana", "Orange"];
const numberArrays = [1,2,3,4,5]
console.log(fruits);
console.log(numberArrays);  

console.log(fruits[1]);

numberArrays.push(6); //add a new element at the end
console.log(numberArrays);

numberArrays.pop(); //remove the last element
console.log(numberArrays);

numberArrays.unshift(8); //add at the begining
console.log(numberArrays);

numberArrays.shift(); //remove at the begining
console.log(numberArrays);

const slicedArray = numberArrays.slice(1,3); //slice the array from index 1 to 3 not inclued the last 
console.log(slicedArray);

const filteredArray = numberArrays.filter((num)=> num > 2); //filter behind a condition
console.log(filteredArray);

//Array of anys it can accept any type of data, undefined and null
