const btn = document.querySelector('button');

const printName = (name, func)=>{
    console.log(`welcome, ${name} ${func}`)
}

const customTimeOut = setTimeout(printName, 5000, "Praash", "setTimeout");

const customTime = setInterval(printName, 5000, "Praash", "setInterval");

btn.addEventListener("click", ()=>{
    clearTimeout(customTimeOut);
    clearInterval(customTime);
})