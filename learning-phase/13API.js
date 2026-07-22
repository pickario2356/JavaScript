const URL1 ="https://dragonball-api.com/api/characters/1"

const paraText = document.querySelector(".para1")
const button1 = document.querySelector("#btn1")

// function getFnx(){
//     fetch(URL1).then((response)=>{
//         return response.json()})
//     .then((data)=>{
//         console.log(data);
//         paraText.innerHTML = data.transformations[5].name
//     })
// }

// 1. fetch(URL)
// → API ko request bhejta hai. jo Promise<Response> return karta hai.
// 2. .then(response)
// → Server ka response milta hai.but Abhi actual data nahi mila.
// 3. response.json()
// → JSON text ko JavaScript Object me convert karta hai.jo firse Ye bhi Promise return karta hai.
// 4. .then(data)
// → Actual data (Object/Array) mil jata hai.yo Ab properties access kar sakte hain.

// better

const getFnx=async()=>{
    console.log("Searching Some facts.....");
    let response = await fetch(URL1);
    console.log(response)// JSON format;

    let data = await response.json()
    console.log(data)
    paraText.innerHTML = data.transformations[5].name
// console.log(data.transformations[4].name)// data humne var bnaya aur trans aur name iske prototype mai the trans array hai name sting
}



button1.addEventListener("click",getFnx)
