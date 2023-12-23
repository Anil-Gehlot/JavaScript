
//  Declaration of arrays
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 34];
console.log(numbers);

let names = ['anil', 'harsh', 'lokesh', 'paritosh'];
console.log(names);

let info = ['anil', 'indore', 23, true];
console.log(info);

//  Accessing the array elements.
console.log(numbers[0]);
console.log(names[3]);
console.log(info[3]);


// Looping over an Array
for (let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
}

// Looping over an Array by for-of loop
for (let name of names){
    console.log(name)
}
