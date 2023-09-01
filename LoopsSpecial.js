const arr = [2,4,6,8,10];

// For of Loop
// ITs not change orignal arr
// for (let element of arr){
//     console.log(element)
// }

// for each
// IT also not change orignal arr
// arr.forEach((val, ind)=>{
//     console.log(val);
// })


// const result = arr.map((val, ind)=>{
//     return val;
// })

const result = arr.reduce((previousValue,val,ind,myArr)=>{
    return previousValue +val;
})
console.log(result);


// Where to Use For Of and For Each