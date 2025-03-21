//Artihmetical operations
let a = 20;
let b = 30;
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;
console.log(sum)    ;

//Comparison operators  (==, ===, !=, !==, <, >, <=, >=)
let x = 50;
let y = 10;
let isLooseEqual = x == y;
let isStrictEqual = x === y;
console.log(isLooseEqual, isStrictEqual);  
let notEqual = x != y; 

//Logical operators (&&, ||, !)
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse;
let or = isTrue || isFalse;
let not = !isTrue;
console.log(andResult);

//Ternary or conditional operator
let ageCondition = 10;
let message = ageCondition >= 18 ? "You are an adult" : "You are a minor";
console.log(message);