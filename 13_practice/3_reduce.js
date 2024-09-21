// Given an array of numbers, find the sum of all the numbers.
let arr1 = [1, 2, 3, 4];
let arr1_result1 = arr1.reduce((acc, element, index, arr) => acc + element); // without acc default value
let arr1_result2 = arr1.reduce((acc, element, index, arr) => acc + element, 10); // with acc default value
// console.log(arr1_result1, arr1_result2)

// Use reduce to flatten an array of arrays into a single array.
let arr2 = [[1, 2], [3, 4], [5]];
let result2 = arr2.reduce((acc, curr) => [...acc, ...curr]);
// console.log(result2)

// Count the occurrences of each element in an array.
let arr3 = [1, 2, 2, 3, 3, 3];
let result3 = arr3.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
// console.log(result3);




// Use reduce to create an object that counts the frequency of each character in a string.
let str =  "hello"
let str_result = str.split("").reduce((acc, curr)=>{
    if (acc[curr]){
        acc[curr] += 1;
    }else{
        acc[curr] = 1
    }
    return acc;
}, {})
// console.log(str_result)

