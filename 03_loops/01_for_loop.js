/*

Loops are used to execute a piece of code again & again. 

Types of loops.
    
    1. for loop 
    2. while loop 
    3. do-while loop

*/

// simple for loop
for (let i = 0; i<=20; i++){
    console.log(`i = ${i}`);
}


//  for of loop : for of loop is used to iterate over string or array.

let str = "anil";

for (let char of str){
    console.log(char);
}


// for in loop : used to iterate over the objects.

let student = {
    "Name" : "anil",
    "surname": "gehlot",
    "age" : 23
}

for (let key in student){
    console.log( `key = ${key} , value = ${student[key]}`);
}


