const arr = [2,4,6,8,10];

// console.log(arr);
// arr.find((value, index)=>{
//     if(value === 6){
//         console.log("Index "+index)
//         console.log("Matched "+value);
//     }else{
//         console.log("Index "+index)
//         console.log("Not Matched "+value);
//     }
// });
// const result = arr.find((value, index)=>{
//     if(value === 6){
//        return value;
//     }else{
//         return value;
//     }
// //    console.log(index);
// });
// const result = arr.filter((value, index)=>{
//     if(value > 6){
//        return value;
//     }
// });

// const result = arr.every((value,index)=>{
//     return value > 2;
// })
const result = arr.some((value,index)=>{
    return value < 4;
})

console.log(result)