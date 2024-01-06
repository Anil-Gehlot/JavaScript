


let myPromise1 = new Promise( function(resolve, reject){
    setTimeout(function() {
        console.log("I am inside the Promise 1...!!")
    }, 5000);
    
    // resolve(34)
    reject("got error")
} )

myPromise1.then( (value) => { console.log("fullfilled " + value) } )

myPromise1.catch( (error) => { console.log("error " +error) } )


// dono ko ek sath likhna ho to 
// myPromise1.then( (value) => { console.log("fullfilled " + value) } ,  (error) => { console.log("error " +error) })
