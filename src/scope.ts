//Global
var globalVar = " I am a var in global scope"; //can be accessed anywhere
let globalLet = " I am a let in global scope"; //can be accessed anywhere
const globalConst = " I am a const in global scope"; //can be accessed anywhere 

console.log(globalVar);
console.log(globalLet); 
console.log(globalConst);

function testGlobal(){
    console.log(globalVar);
    console.log(globalLet); 
    console.log(globalConst);
}

testGlobal();

//Function
function testFunction(){
    var functionVar = " I am a var in function scope"; //can only be accessed within the function
    console.log(functionVar);

    let functionLet = " I am a let in function scope"; //can only be accessed within the function
}

testFunction();
//console.log(functionVar); //ReferenceError: functionVar is not defined

//Block
if(true){
    var blockVar = " I am a var in block scope"; //can be accessed outside the block
    let blockLet = " I am a let in block scope"; //can only be accessed within the block    
    console.log(blockVar);
    console.log(blockLet);
}

console.log(blockVar);