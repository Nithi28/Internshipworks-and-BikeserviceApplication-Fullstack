const addPromise=(a,b)=> new Promise((resolve,reject)=>{
        setTimeout(() =>
        {
             resolve(a+b);
        },2000);
    });
(async()=>{
    let summ1= await addPromise(1,2);
    let summ2=await addPromise(3,summ1);
    console.log(summ2);
})()

addPromise(1,2)
    .then((sum1)=>{
        return addPromise(3,sum1);
    })
    .then((sum2)=>{
        return addPromise(4,sum2)
    })
    .then((sum3)=>{
        console.log(`The sum of the first number  ${sum3}`);
    });
(async()=>{
    const sum1=await addPromise(1,2);
    const sum2=await addPromise(3,sum1);
    const sum3=await addPromise(4,sum2);
    console.log(`The number ${sum3}`);
})()
