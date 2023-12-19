
// These are built-in functions to manipulate a string.

let str = "Hello World!!!";


// 1. toUpperCase( )
console.log( str.toUpperCase() );

// 2. toLowerCase()
console.log( str.toLowerCase() );


// 3. trim() : it is used to remove the extra spaces fron the begining and end.
let str1 = '        JavaScript is    a dynamically typed language.           ';
console.log( str1.trim() );


// 4. concat() 
let firstString = "hii ";
let secondString = "hello" ;

console.log( firstString.concat(secondString) )



// 5. replace(oldValue, newValue)
let sample = "Hii this is new era of ....."

console.log( sample.replace('i', 'p') );       // it replaces only first occurence of specified old value.
// console.log( sample.replaceAll('i', 'p') );    // it replaces all occurence of specified old value.


// 6. charAt(index)
console.log( str.charAt(3));

// 7. split()
console.log( str.split(",") ) ;      // Split on commas
console.log(str.split(" "));         // Split on spaces
    

// 8. finding substring 
/*

slice(start, end)
substring(start, end)
substr(start, length)

*/

let newStr = "Hii, Welcome to my world..";

console.log( newStr.slice(7, 20));
console.log( newStr.substring(7,20) );
