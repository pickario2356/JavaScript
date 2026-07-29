// Var,Let,Const
// var=>for Whole fnx
// let=>block(like here in loop)
// const=>same as let but it can not be updated


// function sayhehe(){
    // for(var i=0;i<5;i++){

    // for(let i=0;i<5;i++){
    //     console.log(i)
    // }
    // console.log(i)

    // const yoo= 5+6
    // yoo=2
    // console.log(yoo)
// }
// sayhehe()


// objects

// const person = {
//     name:"blah blah",
//     action:function fighting(){ let num = 55;return num},// action is method "figting" is fnx name
//     move(){}// move is method in prsn obj
// }
// // to call

// console.log(person.action())

// // const target ='action()'    // function CALL
// const target ='action'         // function ko GET karo
// console.log(person[target]())  // pehle function nikalo, fir CALL karo


// arrow Fnx

// Function Declaration
// function greet() {}

// Function Expression
// const greet = function () {}

// basic fat arrow fnx
// var a =()=>{}

// fat arrow fnc with one parameter
// var b = param=>{}
// b(12)// ek value mai fat"()" hata sakte hai do mai fat jruri

// fat arrow fn with implicit return
// var g = ()=>123
// console.log(g())


// template literals backtick
// console.log(`heyooo${9*9}`)


// default parameter
// function hoe(a=0,b=0,c=69){
//     console.log(a,b,c)
// }
// hoe(1,2,3)
// hoe(1)


// rest and spread
// let a=[1,2,3,56,5,7,8,95]
// let b = [...a]// spread=Phailana aur ek trh sai copy

// function ab(a,b,c,...d){// rest =Bacha hua sab Collect karo
//     console.log(a,b,c,d)
// }
// ab(1,23,4,5,6,8,52,4.88,)


// destructing
// IN ARRAY // isme bcde var bn rahe hai a array kai cuz[] and f undefined
// let a=[5,6,8,4]
// let [b,,d,e,f] =a;// output b=5 d=8 means 6 skip ho gaya cuz uske var mai kuch nahi 

// IN OBJ
// const obj= {name:"kaalu",age:55}
// let {age} =obj// means age ab variable bnn gaya of obj


// PROMISES
// let ans =new Promise((res,rej)=>{
//     if(true){
//         return res()// res khud ek fnx hota hai
//     }
//     else{
//         return rej()// rej khud ek fnx hota hai
//     }
// })

// ans.then(()=>{
//     console.log("doneeee")
// })
// // .then,catch method hote hai jisme fnx pass hote hgai
// ans.catch(()=>{
//     console.log("reejectsssss")
// })

// var ans = new Promise((res,rej)=>{
//     let num = Math.floor(Math.random()*9)//dono method hai .random() sai 0 sai 1 tk ki value decimal mai but not 1 .floor() sai wo decimal ki value single digit mai krti hai ex 2.79=2
//     if(num<5){return res(num)}
//     else{return rej(num)}
// })
// ans
// .then(()=>{console.log("below")})
// .catch(()=>{console.log("above")})

// // PROMISE CHANNING
// var ans = new Promise((res,rej)=>{
//     return res("laptop open kr")//Function call ke () ke andar jo value pass karte ho, wo argument hoti hai. jese yaha laptop hai res fnx call kai() ka 
// })

// let p2 = ans.then((data)=>{// data yaha parameter hai
//     console.log(data)

// return new Promise((res,rej)=>{
//         return res("chrome chla")
//     })
// })
// let p3 = p2.then((data1)=>{
//     console.log(data1)

// return new Promise((res,rej)=>{
//     return res("game chlaya")
//     })
// })
// p3.then((data2)=>{
//     console.log(data2)
// })


// async await
// function user(){ without async
//     fetch('https://randomuser.me/api/')
//     .then((raw)=>{return raw.json()})
//     .then((data)=>{console.log(data)})
// }

// async function user(){
//     let raw = await fetch('https://randomuser.me/api/')//await function ko pause karta hai jab tak Promise resolve na ho. Main thread block nahi hoti, JS dusre kaam karti rehti hai. await sirf us async function ke execution ko rokta hai.
//     let data = await raw.json()// fetch maui await laga wo side ho gyaa jb tk usme kuch nahi aajata raw mai kuch nahiaya jb kuch aya tb usko .json kia for conversion but isko bhi await mai krna hoga vrna ye pehle hi raw.json krr dega jb raw mai kuch aya nahi nahi
//     console.log(data)
// }
// user()

// types of promises
// await Promise.all([// teeno apis ek sath chlti hai
//     fetch(user),
//     fetch(posts),
//     fetch(comments)
// ]);

// await Promise.race([Jo Promise pehle complete hoga, wahi result milega.









    
//     fetch(user),
//     fetch(posts),
//     fetch(comments)
// ]);
// 



// try and catch
// console.log("hehe")
// try {console.log(hehe)}
// catch(err){console.log(err)}
// console.log("haha")

 
