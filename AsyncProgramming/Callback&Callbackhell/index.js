// function sum(a, b, callback){
//    const result =   a+b;
//    callback(result);
// }
// function displaySum(result){
//     const h1 = document.querySelector("h1");
//     h1.innerText = result;
// }
//  sum(10,23, displaySum);
//  sum(100,23, alert);
//  sum(1,23, console.log);

 /*  Note: displaySum, alert, console.log are callback functions and sum is higher order function  */


//  const arr = [1,2,3,4,5,6];

//  function calculator(arr=[], callback){
//     const ans = [];

//      arr.forEach((val,ind)=>{
//         ans.push(callback(val));
//      })
//      console.log(ans);
//  }  
//  function sumByTen(a){
//     return a+10;
//  }
//  function minusByTen(a){
//     return a-10;
//  }
//  function mulitpleByTen(a){
//     return a*10;
//  }
//  function divideByTen(a){
//     return a/10;
//  }
//  calculator(arr, sumByTen);
//  calculator(arr, minusByTen);
//  calculator(arr, mulitpleByTen);
//  calculator(arr, divideByTen);
//  calculator(arr, (val)=>{
//     console.log("I am a callback funtion", val*10);
//  });






