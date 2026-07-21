const URL ="https://meowfacts.herokuapp.com/"

const getFnx=async()=>{
    console.log("Searching Some cat facts.....");
    let response = await fetch(URL);
    console.log(response)
}