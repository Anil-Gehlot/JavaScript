
// Given an array of numbers, return a new array containing only the numbers greater than 10.
let arr1 = [5, 12, 18, 3]
let newArr1 = arr1.filter((element, index, arr1) => element > 10)
// console.log(newArr1)


// Filter an array of strings to only include those that start with the letter "A".
let arr2 = ["Apple", "Banana", "Avocado"]
let newArr2 = arr2.filter((element, index, arr2) => element[0]==="A")
// console.log(newArr2)


// Given an array of objects representing books (with title and author properties), return an array of books written by a specific author.
let arr3  = [ { title: "Book A", author: "Author 1" }, { title: "Book B", author: "Author 2" }, { title: "Book C", author: "Author 1" }, { title: "Book D", author: "Author 2" } ]
let newArr3 = arr3.filter((element, index, arr3) => element.author==="Author 1")
// console.log(newArr3)





// Filter an array of numbers to include only the prime numbers.

const isPrime = (num) => {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
};
let arr4 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr4 = arr4.filter(element => isPrime(element))
console.log(newArr4)
// Output: [2, 3, 5, 7]
 

// Given an array of users (objects with name and isActive properties), return an array of active users.
let arr5 =  [ { name: "John", isActive: true }, { name: "Jane", isActive: false } ]
let newArr5 = arr5.filter(element => element.isActive=== true )  
console.log(newArr5)