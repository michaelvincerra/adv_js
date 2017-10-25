// Understanding Promises in JS || TREEHOUSE
// https://teamtreehouse.com/library/understanding-promises-in-javascript

// calculation.js 
let calculationPromise1 = new Promise (function(resolve, reject) {
    setTimeout(function(){
        resolve(1+1)
    }, 1000);                       // Because this 1000, it will resolve slower: // 6
});

let calculationPromise2 = new Promise (function(resolve, reject) {
    setTimeout(function(){
        resolve(1+2)
    }, 500);                        // Because this 500, it will resolve quicker: // 7
});


function addTwo(value){
    return value + 2;
}
function printFinalValue(nextValue){
    console.log("Final value is", nextValue)
}
calculationPromise1             // Unit testing is easier if chained methods are written this way.
    .then(addTwo)
    .then(addTwo)        
    .then(printFinalValue)
    
calculationPromise2             // Unit testing is easier if chained methods are written this way.
    .then(addTwo)
    .then(addTwo)        
    .then(printFinalValue)

// calculationPromise.then(function(value){
//     console.log('The answer is', value)
// })
// Above revised to use value in the NEXT PROMISE


//  SEE ABOVE
// calculationPromise.then(function(value){
//     return value + 2; 
// }).then(function(nextValue){
//     console.log("Final value is", nextValue)
// })

// ABOVE functions REVISED: 

// function addTwo(value){
//     return value + 2;
// }

// function printFinalValue(nextValue){
//     console.log("Final value is", nextValue)
// }

// calculationPromise
//     .then(addTwo)
//     .then(addTwo)    
//     .then(printFinalValue)