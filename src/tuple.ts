//elder brother from array - when I know the order of the data types 
let personDetail:[string,number,boolean] = ["Angela","Maria", 30,true];
console.log(personDetail[0]);
console.log(personDetail[1]);
console.log(personDetail[2]);

personDetail[0] = "Angela Maria"; 
console.log(personDetail[0]);

personDetail.push(true);
console.log(personDetail);
