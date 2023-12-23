

/*
Q.1  For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
     Find the average marks of the entire class.

*/

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let mark of marks){
    sum += mark;
}
let avg = sum/marks.length;
console.log(avg);


/*
Q.2  For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
    All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
*/

let prices = [250, 645, 300, 900, 50];

for(let index = 0; index<prices.length; index++){
    prices[index] = prices[index]/10;
}
console.log(prices);


/*

Q. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”

a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end

*/

let  companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', "IBM", 'Netflix'];

let firstElement = companies.shift();
companies.splice(1,1,"ola");
companies.push('Amazone');

console.log(companies);