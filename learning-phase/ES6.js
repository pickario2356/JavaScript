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
// let a=[5,6,8,4]
// let [b,c,d,e,f] =a;// isme bcde var bn rahe hai a array kai cuz[] and f undefined


