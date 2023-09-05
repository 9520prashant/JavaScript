const input = document.querySelector("input");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

btn.addEventListener("click",()=>{
    // Storing value in Session Storege
        sessionStorage.setItem("Key1",input.value);
    } )

deleteBtn.addEventListener("click", ()=>{
    console.log(sessionStorage.key(0))
    sessionStorage.removeItem("Key1"); // for removing specific object
    sessionStorage.clear(); // remove all the object from sessionStrorge
})
console.log(sessionStorage.getItem("Key1"))