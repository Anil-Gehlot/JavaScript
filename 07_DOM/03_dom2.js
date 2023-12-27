
//  to get attaributes of HTML tags.
let div = document.querySelector("div");
console.log(div)


let name = div.getAttribute("name")
console.log(name)

let field = div.getAttribute("field")
console.log(field)

let cls = div.getAttribute("class")
console.log(cls)


// to set the new attributes.

div.setAttribute('class', 'newClass' )
div.setAttribute('name', 'newName')
div.setAttribute('field', 'newFeild')




// to find the css of any node
let tag = document.querySelector("button")
console.log(tag.style)

// TO CHANGE THE STYLE
tag.style.backgroundColor = 'red'
tag.innerHTML = "fosadhfkasnf;sdhfo;asd"
tag.innerText = "hmmmm!!"
// tag.style.visibility = "hidden"