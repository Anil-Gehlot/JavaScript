/*

Variable Naming Rules : 

1. Variable names are case sensitive; “a” & “A” is different.
2. Only letters, digits, underscore( _ ) and $ is allowed. (not even space).
3. Only a letter, underscore( _ ) or $ should be 1st character.
4. Reserved words cannot be variable names.


let, const & var : 

var  : Variable can be re-declared & updated. A global scope variable.
        it was used before 2015(ES6). Now it is considered as a bad programming practice.

let  : Variable cannot be re-declared but can be updated. A block scope variable.

const: Variable cannot be re-declared or updated. A block scope variable.

*/

var name = 'Anil';
console.log(name);

name = "harsh";
console.log(name)

var name = 'Lokesh';
console.log(name);




let surname = 'Gehlot';
console.log(surname)
surname = "yadav";
console.log(surname);



const age = 23;
console.log(age)
