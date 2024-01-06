
function hello(){
    console.log("hello..!!!!")
}


console.log("one")
console.log("two")
console.log("three")

// 4s === 4000ms
setTimeout(hello, 4000)           // after 2 second hello function will be called 


console.log("four")
console.log("five")



/*
instructions after setTimeout method are not waiting to execute the setTimeout, this nature is called asyncronous.
*/