const a = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Promise Resolved");
    }else{
        reject("Promise Reject");
    }
});

a.then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject)
})  

const arr = [];

const fetchData = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            arr.push({name:"Praash"});
            if(arr.length >= 1)
                resolve("Data Fetched");
            else   
                reject("some problem");
        }, 2000);
    })
}
fetchData().then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
}).finally(()=>{
    console.log("Will work either way")
})