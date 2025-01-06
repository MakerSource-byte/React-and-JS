// Async function: Operates like a regular function, but returns a PROMISE instead, with a resolved value of whatever returned

//------------ EXAMPLE WITH REGULAR FUNCTION----------
function withConstructor(num){
    // With regular function, you need to return a NEW promise
    return new Promise((resolved, reject) => {
        if (num === 0){
            resolved('Zero')
        }else{
            reject('Not Zero');
        }
    })
}

withConstructor(0).then(resolvedValue => {
    // console.log("Function 'withConstructor(0)' returned promise with resolved value:", resolvedValue)
}).catch(rejectionValue => {
    // console.log(rejectionValue);
})


// ------------- WITH ASYNC FUNCTION ------------
async function withAsync(num){
    if (num === 0){
        return 'Zero';
    }else{
        return 'Not Zero';
    }
}

withAsync(100).then(resolvedValue => {
    // console.log(`Function 'withAsync(100)' returned promise with resolved value: ${resolvedValue}`)
})




// -------- AWAIT Keyword ---------
// await: halts the rest of the program, within an async function, until a promise resolves

// EXAMPLE PROGRAM:
const shopForBeans = () => {
    // Waits between 0 - 1 second to resolve
    return new Promise((resolved, reject) => {
        const beans = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
        setTimeout(() => {
            // Generates a Random Index Number
            const randIndx = Math.floor(Math.random() * beans.length);
            const typeOfBean = beans[randIndx];
            console.log(`2. I Bought ${typeOfBean} beans from the Store!`);
            resolved(typeOfBean);
        }, 1000);
    });
};

async function getBeans(){
    console.log(`1. Heading to the store to shop for Beans...`);
    const bean = await shopForBeans(); // awaits for promise 'shopForBeans' to resolve. Await keyword assigns resolved value of its promise to variable
    console.log(`3. Great! Lets go home and cook some ${bean} beans for Dinner!`);
}

getBeans();