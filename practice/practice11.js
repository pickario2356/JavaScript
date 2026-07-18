// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email
//     }
//     data(){
//         console.log("Your data")
//     }
// }
// let person1 = new user("Aegon","Balerion@gmail.com")
// let person2 = new user("Daemon","vermitor@gmail.com")


let Data = "Your Data"
class user{
    constructor(name,email){
        this.name=name;
        this.email=email
    }
    data(){
        console.log(Data)
    }
}
class admin extends user{
    constructor(name, email) {// Constructor tab likhte hain jab child ko kuch extra kaam karna ho yaha jruri nahi tha ye
        super(name, email);
    }
    editedData(){
    Data = "edited content"
    }
}
let person1 = new user("Aegon","Balerion@gmail.com")
let person2 = new user("Daemon","vermitor@gmail.com")

let admin1 = new admin("Rober","ned@gmail.com")
// admin1.editedData()// to actualyy edit data btw in CL

