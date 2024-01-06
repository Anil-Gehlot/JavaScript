
// adding 100 para in my html page
const t1 = performance.now()
for (let i = 1; i<=100; i++){

    let para = document.createElement("p")
    para.textContent = `This is para no. ${i}`
    document.body.append(para)
}
const t2 = performance.now()
console.log(`Time taken : ${t2-t1}`)



//  optimizing above code a little bit
const t3 = performance.now()
let div = document.createElement("div")

for (let i = 0; i<=100; i++){

    let para = document.createElement("p")
    para.textContent = `This is para no. ${i}`
    div.append(para)
}
document.body.append(div)
const t4 = performance.now()

console.log(`Time taken ; ${t4-t3}`)







// more optimised by document fragment
const t5 = performance.now()
let fragement = document.createDocumentFragment()

for (let i = 0; i<=100; i++){

    let para = document.createElement("p")
    para.textContent = `para no. ${i}`
    fragement.append(para)
}
document.body.append(fragement)         // 1 reflow and 1 repaint
const t6 = performance.now()
console.log(`Time taken ; ${t6-t5}`)