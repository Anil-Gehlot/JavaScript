// how to insert & delete new node in an existing web page.

/*

firstly get that elements ==> let el = document.createElement(“div“)

TO INSERT ==>>

node.append( el )       //adds at the end of node (inside)
node.prepend( el )      //adds at the start of node (inside)
node.before( el )       //adds before the node (outside)
node.after( el )        //adds after the node (outside)

TO DELETE ==>>

node.remove( )          //removes the node

*/ 



//  To insert the node we need to create it

let newBtn = document.createElement("button");
newBtn.innerText = "click me !!"
newBtn.style.backgroundColor = 'green' 


// getting the element
let getDiv = document.querySelector("div")
console.log(getDiv)

getDiv.append(newBtn)   // it adds at the end of the div
getDiv.prepend(newBtn)  // it add at the top of the div
getDiv.after(newBtn)    // it add just after the div
getDiv.before(newBtn)   // it adds just before the div








// creating a h1 tag

let heading = document.createElement("h1")
heading.innerHTML = "<i> Added Heading </i>"
heading.style.backgroundColor = "aqua"
heading.style.width = "300px"


// let p = document.querySelector("p")
// p.before(heading)

document.querySelector("body").prepend(heading)






//  TO DELETE node

let para = document.querySelector("p")
para.remove()


