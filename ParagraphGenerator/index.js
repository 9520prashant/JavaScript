const input = document.getElementById("numberOfWords");

const conatainer = document.querySelector(".container");

const generateWord = (n)=>{
    let text = "";
    const lettter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; ++i){
        const randomIndex = (Math.random()*25).toFixed(0);
        text+=lettter[randomIndex];
    }
    return text;
}

let numOfword;
const generatePara=()=>{
    numOfword = Number(input.value);
    const para = document.createElement("p");
    let data = "";
    for(let i=0; i<=numOfword; i++){
        const randomNumber = (Math.random()*15).toFixed(0);
        data+= generateWord(randomNumber);
        data+= " ";
    }
    para.innerText = data;
    para.setAttribute("class", "paras");
    conatainer.append(para);

}
