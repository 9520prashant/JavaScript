const heading = document.getElementById('heading');
const box = document.getElementById("box1");
const btn = document.getElementById('myBtn');
const input = document.querySelector("input");

btn.addEventListener("click", ()=>{
    if(box.classList.contains("classFordiv")){
        box.classList.remove("classFordiv");
    }else{
    box.classList.add('classFordiv'); // classForDiv, the class exist in css
    }
});
btn.addEventListener("contextmenu",(e)=>{
    e.preventDefault();// If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
    btn.style.backgroundColor="purple";
})
box.addEventListener("mouseover", ()=>{
    btn.style.transform = "scale(1.1)";
})
box.addEventListener("mouseout",()=>{
    btn.style.transform = "";
})

addEventListener("click", (e)=>{
    console.log(e.clientX);
    console.log(e.clientY);
})
function Blur(){
    document.body.style.filter="blur(5px)";
}
heading.addEventListener("dblclick", Blur)
// heading.addEventListener("click", ()=>{
//     document.body.style.filter="";
// })
if(Blur)
heading.removeEventListener("dblclick", Blur)

input.addEventListener("change", (e)=>{
    console.log("Changing... " + e.target.value)
})