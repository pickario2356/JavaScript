// function asyncFnx1(){
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         console.log("Data1");
//         resolve("completed1")
//       },3000)
//     })
// }
// function asyncFnx2(){
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         console.log("Data2");
//         resolve("completed2")
//       },3000)
//     })
// }
// console.log("Data is Fetching.......")
// asyncFnx1().then((res)=>{
//     console.log(res);

// console.log("Data is Fetching.......")
// asyncFnx2().then((res)=>{
//     console.log(res);
// })
// })




// function getData(dataId){
//     return new Promise((resolve,reject)=>{//we get pending until we ad resolve or rejectfnx
//         setTimeout(()=>{
//         console.log("data:",dataId)
//         resolve("done")
//     },2000)
//     })
// }
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })

// Better
// getData(1).then((res)=>{
//     console.log(res)
//     return getData(2)
// }).then((res)=>{
//     console.log(res)
//     return getData(3)
// }).then((res)=>{
//     console.log(res)
// })
// Return Fnx sai bahr value use krne kai liye hoti hai jese yaha
// getData(1).then((res)=>{
//     console.log(res)
//     return getData(2)
// }) pai fnx khtm but get data @ kai liye return


// Async Await

// function api(){
//     setTimeout(()=>{
//         return new Promise((res,re)=>{
//             console.log("hehehe hahah")
//             res(200)
//         })
//     },2000)
// }
// async function getWeather(){
//     await api()
// }
// console.log(getWeather())


// function getData(dataId){
//     return new Promise((resolve,reject)=>{//we get pending until we ad resolve or rejectfnx
//         setTimeout(()=>{
//         console.log("data:",dataId)
//         resolve("done")
//     },2000)
//     })
// }
// // async function gettingData(){
// //     await getData(1)
// //     console.log("GettingData1")
// //     await getData(2)
// //     console.log("GettingData2")
// //     await getData(3)
// //     console.log("GettingData3")
// // }



// upara mannualy fnx call krna pdra hai isme no need to do mannually
// (async function (){
//     await getData(1)
//     console.log("GettingData1.........")
//     await getData(2)
//     console.log("GettingData2.........")
//     await getData(3)
//     console.log("GettingData3.........")
// })();



// different;
// let a=6;
// let b=7;
// console.log(a+b)
// try {console.log(a-x)}
// catch(err){
//     console.log(err)
// }
// console.log(a*b)
// console.log(a/b)
// console.log(a^b)