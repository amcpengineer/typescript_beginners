//Syntax
/* 
function functionName(parameter1: type, parameter2: type): returnType {
    //function body
}
*/

function greeting(){
    console.log("Hello from the function1");
}

greeting();

//function with parameters
function greeting1(nameParament:string){
    console.log(`Hello ${nameParament}`);
    //console.log('Hello ' + nameParament);
}

greeting1('John');

//function with return
function add(a:number, b:number){
    return a+b;
}

console.log(add(3,5));

//function with default parameters and optional parameters 
function greeting2(name:string = "Angela", age?:number){
    console.log(` Hello ${name} with the age of ${age}`);
}

greeting2();
greeting2("Francisco");
greeting2("Yamile",60);
greeting2(undefined,60);
