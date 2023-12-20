let student = {
    Name : "anil",
    surname: "gehlot",
    age : 23
}

student['anna'] = 1;
student['1'] = 1;
console.log(student)

// for (let key in student){
//     console.log(typeof student.age)
//     console.log( `key = ${key} , value = ${student[key]} , ${ student.age }`);
// }