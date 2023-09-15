const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1")

const fetchData = async ()=>{
    const response = await fetch(url);
    console.log(response);
}
fetchData()