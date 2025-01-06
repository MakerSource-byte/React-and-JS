// Asynchronous programming in Javascript allow us to perform multiple operations simultaneously (like making a network request or querying a database at the same time)
// Promises: An Object representing the Outcome of an Asynchronous Operation (Either pending, resolved or rejected)
// The Promise CONSTRUCTOR takes a FUNCTION PARAMETER, running instantly when called

// const { reject } = require("async");

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344,
};

const myExecutor = (resolved, reject) => {
    if (inventory.sunglasses > 0){
        resolved("Sunglasses Ordered");
    }else{
        reject("Item out of Stock!")
    }
}

// Creates new Instance of Promise within function for reusablity
function orderSunglasses(){
    return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();
console.log(orderPromise)


// ----------- Handling Events AFTER promises are fufilled -----------
// the '.then()' method is a higher-order function, taking two addtional functions as parameters to handle success and rejection cases

// Creates a New Promise, that checks if a randomly generated number is less than 0.5, when function is Invoked
const isGreater = () => {
    return new Promise((resolved, reject) => {
        let rand = Math.random() // Generates a decimal/float number between 0 - 1, inclusive
        if (rand < 0.5){
            resolved('Yayy');
        }else{
            reject("Oh Nooo!");
        }
    });
}

// Creates a handler function for SUCCESS; invoked when promise is SUCCESSFUL
function handleSuccess(resolvedValue){
    console.log (`Success Value: ${resolvedValue}`);
}

// Creates a handler function for FAILUERS/REJECTIONS; invoked when promise is REJECTED
function handleRejection(rejectValue){
    console.log (`Reject Value: ${rejectValue}`);
}

//.catch(): Exact same as .then() but for failure cases, and only takes 1 parameter
isGreater().then(handleSuccess).catch(handleRejection);