
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 34];

let names = ['anil', 'harsh', 'lokesh', 'paritosh'];

let info = ['anil', 'indore', 23, true];


// push( ) : add to end
numbers.push(12)
console.log(numbers)

numbers.push('anil', 'anna', 'Lokubhai' )
console.log(numbers)


// Pop( ) : delete from end & return
let deleted = names.pop();
console.log(names)


// toString( ) : converts array to string
let stringArray = info.toString();
console.log(stringArray)
console.log(typeof stringArray)


// concat( ) : joins multiple arrays & returns result.
let newArray = numbers.concat(names, info);
console.log(newArray)
console.log()


// unshift( ) : add to start
let sample = [1, 2, 3, 4, 5, 6, 6, 7];
sample.unshift(345, 3,4532,535,12);
console.log(sample);


// shift( ) : delete from start & return.
let friends = ['anil', 'harsh', 'lokesh', 'paritosh'];
let del = friends.shift();
console.log(friends)


// slice( ) : returns a piece of the array
let places = ['rajwada', "lalBagh", "raceCourse", 'bholaRam', "patalPani", 'bilawali']
let slice = places.slice(2, 5)
console.log(slice)










//  Splice( ) : change original array (add, remove, replace)
let arr = [1, 23,23 ,3 ,4 ,56,8 , 6, 7];

arr.splice(2, 2, 101, 102);  // to replace elements
console.log(arr);

arr.splice(5,0,101)     // add element
console.log(arr);

arr.splice(3,1)     // delete element
console.log(arr);

arr.splice(2, 1, 456)   // replace element
console.log(arr)