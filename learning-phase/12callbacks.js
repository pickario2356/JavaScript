// console.log("One")
// console.log("Two")

// setTimeout(()=>{
//     console.log("Hello")},3000)// fnx, time(1000=1s)

// console.log("Three")
// console.log("Four")


// "CALLBACKS"
// function sum(a,b){
//     console.log(a+b)
// }
// function calc(a,b,sumCallback){
//     sumCallback(a,b)// ye is fnx kai a aur b decide krra
// }
// // calc(5,2,sum)// a=5,b=2,sumcallback=sum, cuz parameter sai compare hogaya
// calc(5,2,(a,b)=>{
//     console.log(a+b)
// })

// const hello=()=>{
//     console.log("yphohoho")
// }
// setTimeout(hello,3000)

// function getData(dataId,nextData){
//     setTimeout(()=>{
//         console.log("data:",dataId)
//         if(nextData){
//            nextData();
//         }
//     },3000)
// }


// // getData(1)
// // getData(2)
// // getData(3)// abhi 1 postpone hua to next chla fir wo hua to next to tino ek hi time pai mile 


// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })
// poehle getData vla fnx caal hua fnnxc mai timer 3sec ka
// 3s baat data print hua get dtata ka dusra argument bnn jo 
// nextData hai wo = jo jata hai last wale get Data kai jo hai 
// getData(2) ab isko run kai lkliyer ye pehle check hua ki next data
// mai kuch hai ki nai if yes toh nextData() work krega
// toh getData(2) hoga fir tb check kreg ki nextData mai kkuch hai ki nai
// aur kyuli getData(2) mai bss dataId wala hai to next data nhi chlega

// GPT
// getData(1, callback) call hua.
// dataId = 1
// nextData = () => { getData(2); }
// 3 sec baad data: 1 print hua.
// if(nextData) check hua. Kyunki nextData me function hai, condition true.
// nextData() chala, matlab arrow function run hua.
// Arrow function ke andar getData(2) call hua.
// Ab second call me:
// dataId = 2
// nextData = undefined
// 3 sec baad data: 2 print hua.
// esa hi getData(3) ,mai9 hu
// if(nextData) ab false hua, kyunki second argument diya hi nahi tha. Isliye aage kuch nahi chala.


// "PROMISES"
// let promise = new Promise((resolve,reject)=>{
//     console.log("Helllo World")
//     // resolve(123)
//     reject("this is very special errror")
// })
// console.log(promise)

// function getData(dataId,nextData){
//     return new Promise((resolve,reject)=>{//we get pending until we ad resolve or rejectfnx
//         setTimeout(()=>{
//         // console.log("data:",dataId)
//         // resolve("done")
//         reject("IDK Man Just An Error")
//         if(nextData){
//            nextData();
//         }
//     },5000)
//     })
// }
// let xyz = getData(123)// jb xyz = getData() call hua tb ye xyz return sai connect hua aur fir isme prms obj save hua
// // return,Ye wahi Promise wapas bhej deta hai jahan se function call hua tha,jese yha xyz sai hua tha

// let getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("printing")
//         // resolve("yup Done")
//         reject("blerwwwww")
//     })
// }
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise done",res)
// })
// promise.catch((err)=>{
//     console.log("koi na better luck nexxt time",err)
// })