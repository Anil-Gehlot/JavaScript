


let myPromise1 = new Promise( function(resolve, reject){
    setTimeout(function() {
        console.log("I am inside the Promise 1...!!")
    }, 5000);
    
    // resolve(34)
    // reject("got error")
} )


let myPromise2 = new Promise( function(resolve, reject){
    setTimeout(function() {
        console.log("I am inside the Promise 2...!!")
    }, 3000);
    // resolve(34)
    // reject("got error")
} )


console.log("without promises...!!")