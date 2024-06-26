
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

// spread operator to concat the array and return copy
let a = [1, 3, 4]
let b = [5, 6, 8]
console.log([...a, ...b])
console.log([...a, 'n',  ...b, 'ad'])


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

// to make the copy of array
let array = [3,45,45,346,34,'dg']
let copied = [...array]
console.log(copied)




let index = names.indexOf("harsh")
console.log(index)  // it gives the index of specified element , if not found then return -1


// includes() returns true if specified element found else return false
console.log(numbers.includes(5)) 

// join() : joins all element of array
let myArray = [1,2,4,'d', 2, 'e']
let joined = myArray.join(",")
let joined2 = myArray.join("*")
console.log(joined)
console.log(joined2) // type === string


//  to sort the array 
myArray.sort()              // it converts the element into the string and then sort
console.log(myArray)

// To reverse the array
myArray.reverse()
console.log(myArray)









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