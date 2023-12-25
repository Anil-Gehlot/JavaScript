/*
Qs. Create a function using the “function” keyword that takes a String (lowercase) as an argument &
    returns the number of vowels in the string.

*/ 

function vowelCount(str){
    Count = 0;

    for (let index=0; index < str.length; index++){
        if ( str[index] === "a" || str[index] === 'e' || str[index] === 'i' || str[index] === 'o' || str[index] === 'u'  ){
            Count ++;
        }
    }

    return Count;
}

console.log( vowelCount("i love Javascript") );







/*
Qs. Create an arrow function to perform the above task.
*/ 

let vowelCount1 = (str) =>{
    Count = 0;

    for (let index=0; index < str.length; index++){
        if ( str[index] === "a" || str[index] === 'e' || str[index] === 'i' || str[index] === 'o' || str[index] === 'u'  ){
            Count ++;
        }
    }

    return Count;
}

console.log( vowelCount1("i love Javascript") );