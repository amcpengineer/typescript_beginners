//different types of contect i could contain 
//Syntax for variable declaration 
//keyword variableName:dataType = value

//String - Collection of characters - doesn't mather singles quote or double quoute

let firstName = "Angela";
let frirstCharofName = "A";
let lastName:string = "Cortes"; 

console.log(firstName);
console.log(frirstCharofName);
// firstName = 20; - not possible to change the type of a variable

//number - integer or float
let age:number = 32; 
let piValue = 3.14;

//boolean'- true or false
let isMarried = false;
let isSingle:boolean = true;

//any
let anyName:any = "Angela";
console.log(anyName);
console.log(typeof anyName);
anyName = 32;
console.log(anyName);
console.log(typeof anyName);

//null and undefine
let nullValue = null;
let undefinedValue;

console.log(nullValue);
console.log(typeof nullValue);
console.log(undefinedValue);
console.log(typeof (undefinedValue));



