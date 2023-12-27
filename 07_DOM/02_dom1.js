
console.log(window)

console.log( document.body )

let roll = document.getElementById("roll")
console.log(roll)
console.dir(roll)

let techy = document.getElementsByClassName("techy")
console.log(techy)


let paragraphs = document.getElementsByTagName("p")
console.log(paragraphs)


let firstEle = document.querySelector("div")
console.log(firstEle)


let allElement = document.querySelectorAll("div")
console.log(allElement)

let idEle = document.querySelectorAll("#click")
console.log(idEle)

let allClasses = document.querySelectorAll(".techy")
console.log(allClasses)



/*

DOM Manipulation

tagName : returns tag for element nodes
innerText : returns the text content of the element and all its children
innerHTML : returns the plain text or HTML contents in the element
textContent : returns textual content even for hidden elements

*/ 

console.log( firstEle.tagName)
console.log(allElement[0].tagName)
console.log(idEle[0].tagName)
console.log(allClasses[1].tagName)


console.log(document.body.firstChild)
console.log(document.body.children)


console.log(document.body.innerText)
console.log(document.body.innerHTML)

// document.body.innerText = "afdbdsnfsd"

// hidden element ko bhi bata deta he
console.log(document.body.textContent)






