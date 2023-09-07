// *****Difference between Primitive and Object*****

// const a = "Hey";

// const b  = {
//     name:"Praash",
//     printSirname:()=>{
//         console.log("Varma")
//     }
// }
// const c = b;


// console.log(a);
// console.log(b);
// b.added = "value is added";
// console.log(b);
//  Object are always passes by reference and primitive dataType like String always passes by value

// console.log(b)
// console.log(c)

// b.age = 19
// console.log("changing b....")
// console.log(b)
// console.log("changing c....")
// c.income = "2000";

// console.log(c)




// ****Object****

const obj = {
    name:String,
    sirName:String,
    age:Number,
    quote: Function
}

// Menually
// obj.name = "Praash";
// obj.sirName = "Varma";
// obj.age = 19;
// obj.quote = ()=>{
//     console.log("It's never late to start again...")
// }
// obj.quote();

// Using Function aka Factory Function
function infos(name, sirName, age, quote){
    return{
        name:name,
        sirName:sirName,
        age:age,
        quote:()=>{
            console.log(quote);
        }
    }
}

const PraashInfo = infos('Praash','Varma',19, "It's Never too late to start again..");
const luckyInfo = infos('Lucky', 'Varma',17, "Never Start Again");
console.log(PraashInfo);
console.log(luckyInfo);