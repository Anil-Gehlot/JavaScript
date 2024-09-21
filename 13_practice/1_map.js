// Given an array of numbers, return a new array with each number doubled.
let arr = [1, 2, 3, 4];
let newArr = arr.map((element, index, arr) => {
  return element * 2;
});
// console.log(newArr)


// Convert an array of strings to an array of their lengths.
let arr1 = ["apple", "banana", "cherry"];
let newArr1 = arr1.map((element, index, arr1) => element.length);
// console.log(newArr1)


// Given an array of objects representing people (with name and age properties), return an array of their names.
let arr2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "ANil", age: 23 },
  { name: "AJ", age: 20 },
];
let newArr2 = arr2.map((element, index, arr2) => element.name);
console.log(newArr2);


// Transform an array of numbers into an array of strings indicating whether they are even or odd (e.g., "even", "odd").
let arr3 = [1, 2, 3, 4]
let newArr3 = arr3.map((element, index, arr) => {
    if (element%2 === 0){
        return "even"
    }else{
        return "odd"
    }
} )
// console.log(newArr3)


// Given an array of products (objects with name and price), return an array of their names concatenated with their prices.
let arr4 = [ { name: "Laptop", price: 1000 }, { name: "Phone", price: 500 } ]
let newArr4 = arr4.map((element, index, arr4)=> `${element.name} - ${element.price}` )
console.log(newArr4)


