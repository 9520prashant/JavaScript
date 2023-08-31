const thisOne = 'hey'
console.log(thisOne)
console.log(document.getElementById('thisOne'))


const hey = document.getElementsByClassName('hey')
console.log(hey)
console.log(document.getElementsByName('email')) 


const spanTag = document.getElementsByTagName('span');
spanTag[0].textContent = "newOne"
// spanTag[0].innerHTML = "<h1>Praash</h1>";
spanTag[0].style.backgroundColor="yellow";
spanTag[0].style.color="red";
spanTag[0].style.font="100 1.2rem 'Roboto"

console.log(spanTag)

const myBtn = document.getElementById('btn')
myBtn.style.color = "white"
myBtn.style.background="purple"
myBtn.style.borderRadius="12px"
myBtn.style.cursor="pointer"

console.log(myBtn)
console.log(myBtn.getAttribute('id'))
myBtn.setAttribute("class","thisisBtn")
console.log(myBtn.getAttribute('id'))
const btn = document.querySelector('input')
console.log(btn)


function bringMeHeading(){
    const h2 = document.createElement('h2');
    h2.innerText="Namaste "
    const myText = document.createTextNode("sample text")
    h2.append(myText)
    document.body.append(h2)
}
// bringMeHeading();