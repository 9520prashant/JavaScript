const input = document.querySelector("input");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

btn.addEventListener("click",()=>{
    // Storing value in Local Storege
        localStorage.setItem("Key1",JSON.stringify({name: "Praash", surname: "varma"}));
    } )

deleteBtn.addEventListener("click", ()=>{
    console.log(JSON.parse(localStorage.getItem("Key1")))
    localStorage.removeItem("Key1"); // for removing specific object
    // LocalStorage.clear(); // remove all the object from sessionStrorge
})