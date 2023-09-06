const title = document.getElementById("title");
const description = document.getElementById("description");
const container = document.querySelector(".container");
const form = document.querySelector("form");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
ShowTodos();


function createTodo(title, description, index){
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    
    const innerDiv = document.createElement("div");
    div.append(innerDiv);
    
    const p = document.createElement("p");
    p.innerText = title; // value why? coz in foreach loop we have value in args
    innerDiv.append(p);
    
    const span = document.createElement("span");
    span.innerText = description;
    innerDiv.append(span);
    
    const deletBtn = document.createElement("button");
    deletBtn.setAttribute("class", "delete");
    deletBtn.innerText = "-";
    deletBtn.addEventListener("click", ()=>{
        removeTodos();
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        ShowTodos();
    })
    div.append(deletBtn);
    
    container.append(div);
}
function ShowTodos (){
    tasks.forEach((value, index)=>{
        createTodo( value.title, value.description, index)
    })
}
function removeTodos(){
    tasks.forEach((value,index)=>{
        const div = document.querySelector(".task");
        div.remove();
    })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTodos();
    tasks.push({
        title: title.value,
        description: description.value,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    ShowTodos();
});