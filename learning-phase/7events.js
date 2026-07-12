// let btn1 = document.querySelector(".clicker")
// btn1.onclick = () =>{
//     console.log("U clicked me by JS")
// }


// let drag = document.querySelector(".fordrag")
// drag.onmouseover = () =>{
//     console.log("u r dragging now me by JS")
// }

// event type
// let btn1 = document.querySelector(".clicker")
// btn1.onclick = (evt) =>{
//     console.log(evt)
//     console.log(evt.target)
//     console.log(evt.type)
//     console.log(evt.clientX,evt.clientY)

// }


// "EVENT LISTENER"

let btn2 = document.querySelector(".clicker")

// btn2.addEventListener("click",(evt)=>{
// console.log(evt)
// console.log(evt.type)
// console.log(evt.target)
// })

btn2.addEventListener("click",()=>{
console.log("by Event listener 'handler2'")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
})


const handler3 = ()=>{
console.log("by Event listener 'handler3'")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}


btn2.addEventListener("click",handler3)

btn2.addEventListener("click",()=>{
console.log("by Event listener 'handler4'")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
})

btn2.addEventListener("click",()=>{
console.log("by Event listener 'handler5'")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
})
 
btn2.removeEventListener("click",handler3)









