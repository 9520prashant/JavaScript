const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1")

const fetchData = async ()=>{
    try {
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error)
    }   
}
fetchData();

// console.log("a")
// setTimeout(() => {
//     console.log("Timeout")
// }, 0);
// Promise.resolve().then(()=> console.log("Promise"))
// console.log("z")