//key and values as a hashmap
const person = {
    personName: 'John',
    personAge: 30,
    isMarried: true
}

console.log(person);
console.log(person.personName);

const person2:{personName:string, personAge:number, isMarried:boolean} = {
    personAge: 32,
    isMarried: true,
    personName: 'Angela'
}
console.log(person2);

//type aliasys - is like creating my own data type
type Person = {
    personName:string,
    personAge:number,
    isMarried:boolean
}

const angela:Person = {
    personAge: 32,
    isMarried: true,
    personName: 'Angela'
}

console.log(angela);
