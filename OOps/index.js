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
// function infos(name, sirName, age, quote){
//     return{
//         name:name,
//         sirName:sirName,
//         age:age,
//         quote:()=>{
//             console.log(quote);
//         }
//     }
// }

// const PraashInfo = infos('Praash','Varma',19, "It's Never too late to start again..");
// const luckyInfo = infos('Lucky', 'Varma',17, "Never Start Again");
// console.log(PraashInfo);
// console.log("Constructor of PraashInfo" + PraashInfo.constructor);
// console.log(luckyInfo);

// Using Constructor Function

// function Star(name, sirName, age, quote){
//     this.name = name;
//     this.sirName = sirName;
//     this.age = age;
//     this.quote = ()=>{
//         console.log(quote);
//     }
// }

// const PraashInfo = new Star("Praash","Varma", 19, 'Its never too late to start again');
// console.log(PraashInfo);

// PraashInfo.mood = "coding"
// console.log(PraashInfo);
// console.log(PraashInfo.constructor);


// Using Object Keyword

// const object = new Object({name:"Praash"})
// console.log(object)
// console.log(object.constructor)