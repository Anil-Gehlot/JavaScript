
// functions without parameter
function myFunction(){
    return "This is my function."
}

// Calling function
functionCall = myFunction();    
console.log(functionCall)




//  function with parameter
function addTwoNumbers(num1, num2){
    // console.log(arguments)
    // console.log(arguments[4])
    return num1+num2
}

console.log( addTwoNumbers(2,3) )
console.log( addTwoNumbers(2,3,43534,65,3465,346,34,32) )




// Named function assignment

let func = function funcAssignment() {
    console.log("Function Assignment.")
}

// we can only call by the variable name not by the function in function assignment
func()
// funcAssignment()        // ReferenceError: funcAssignment is not defined




// Anonymous function assignment
let func1 = function(){
    console.log("anonymous function assignment")
}

func1()





// Rest operator (...)
function func2(...args){
    console.log(args)
}

console.log( func2(1,2,3,4,5,6,6,7) )


// Default parameter
function func3(p, r=10, t=12){
    si = (p*r*t)
    return si
}

console.log(func3(1,2,3))




// getter setter method
let person = {
    fName : "anil",
    lName : 'gehlot',

    // getter method
    get fullName(){
        return `${this.fName} ${this.lName}`
    },

    // setter method    
    set newName(name){
        let parts = name.split(" ");
        this.fName = parts[0]
        this.lName = parts[1]
    }
}


console.log(person)
console.log(person.fullName)

person.newName = "prabhas anna"
console.log(person)


