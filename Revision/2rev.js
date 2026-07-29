// CLOUSER
// function clickLimiter(){
//     let click = 0;
//     return function (){
//         click++
//         console.log(click)
//     }
// }
// let fn1 = clickLimiter()// isme return sai ek fnx return ho ra hai koi value nahi isliye pehle usko kahi store karna hoga fir jo store hua wo new fnx bnega
// fn1()

// THIS
// let obj ={
//     name:"bhaaanu",
//     age:56,
//     sayName: function (){
//         // console.log(obj.name) // both are same
//         console.log(this.name)
//     }
// }
// obj.sayName()

// problems
// let h1 = document.querySelector("h1")
// h1.addEventListener("click",function(){
//     console.log(this.style.color="red")
// })

// let h1 = document.querySelector("h1")
// h1.addEventListener("click",()=>{ // is fflase cuz arrow apne this nahi banata wo parent sai lete hai
//     console.log(this.style.color="red")})

// for sol
// let obj ={
//     name:"bhaaanu",
//     age:56,
//     sayName: function (){
//         let abc= ()=>{
//         console.log(this.age)
//         }
//     abc()}
// }
// obj.sayName()

// let obj ={
//     name:"aegon",
//     age:100000
// }
// function idk(a,b,c){
//     console.log(this,a,b,c)
// }
// idk.call(obj,1,2,3)

// idk.apply(obj,[1,2,3])

// let fnx = idk.bind(obj,1,2,3)// bind gives function
// fnx()