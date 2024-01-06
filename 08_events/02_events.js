
let id2 = document.querySelector("#id2");
console.log(id2);

id2.onclick = () => {
    console.log("id2 button clicked..");

}



let cls1 = document.querySelector(".cls1");

// e is an event object
cls1.onmouseover = (e) => {
    console.log("cls1 mouse hovering..!")
}