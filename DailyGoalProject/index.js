const title = document.getElementById("title");
const description = document.getElementById("description");
const container = document.querySelector(".container");

const div = document.createElement('div');
div.setAttribute("class", "task");

div.innerText = "Hi, I am Task DIv";

const addTodos = ()=>{
    container.append(div);
}