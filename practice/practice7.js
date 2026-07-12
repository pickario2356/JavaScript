let toggle = document.querySelector("#mode")
let color="light"
let body = document.querySelector("body")

toggle.addEventListener(("click"),()=>{
    if(color ==="light"){
        color="dark";
        // document.querySelector("body").style.backgroundColor="black"
        body.classList.add("theme1");
        body.classList.remove("theme2")
    }
    else{
        color="light"
        // document.querySelector("body").style.backgroundColor="white"
        body.classList.add("theme2")
        body.classList.remove("theme1")
    }
    console.log(color)
})

let txt = document.querySelector("h2")
txt.addEventListener(("mouseenter"),()=>{
    txt.style.color="pink"
})
txt.addEventListener(("mouseleave"),()=>{
    txt.style.color="grey"
})