const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdownS = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button")

for(let select of dropdownS){// joki do hai from ka select to ka select
    for(let currCode in countryList){
        let newOpt = document.createElement("option");

        newOpt.innerHTML = currCode;//value kai sath inner cuz usko baad mai use krna hoga
        newOpt.value = currCode;
        if(select.name ==="from" && currCode==="USD"){
            newOpt.selected="selected"
        }
        else if(select.name==="to" && currCode==="INR"){
            newOpt.selected="selected"
        }
        select.append(newOpt)

    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    })
}
const updateFlag = (element)=>{
    let currCode = element.value;
    let countCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countCode}/flat/64.png`

    let img = element.parentElement.querySelector("img")// hum nrml document.bhi krr sakte the cuz select mai do img ahi
    img.src=newSrc
}

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select")

btn.addEventListener("click",(evt)=>{
    evt.preventDefault()
    let amnt = document.querySelector(".amount input");
    let amntVal = amnt.value;
    if(amntVal==="" || amntVal<0){
        amntVal=1
        amnt.value="1"
    }
    let 
})
// amntVal = input ki value ki copy hai.
// amntVal change karne se input box nahi badalta.
// Input box update karna ho to amnt.value bhi change karna padega.