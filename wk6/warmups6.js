 // https://github.com/psbanka/jsclass-winter-2017/blob/master/warmups/parity_outlier.md
/* 
An array is either entirely comprised of odd integers or entirely comprised 
of even integers except for a single integer N. Given this array 
(which will have a length of at least 3, but could be very large) 
write a method that takes the array as an argument and returns N.

 % 2 === 0
 % 2 === 1

 >= 3

To work on: 
if else blocks transformed into map or filter functions. 



*/ 


function outlier(numarray) {
    let newEven = []
    let newOdd = []
    for(let i=0; i>3; i++) {
    if(numarray[i] % 2 === 0 ) {
        newEven.push(numarray[i])
        } else {
        numarray[i] % 2 === 1)  {
            newOdd.push(numarray[i])
        } 
     } 
    }
    return newEven, newOdd
}
outlier([2, 4, 6, 8, 9])

// https://github.com/blakeembrey/code-problems/tree/master/problems/debounce

/* 
Set timeout



/*

Call it 3 times once; it's printed 3 times 
Call it 1 more time, then it only prints once
*/


function deBounce(fn, delay) {
    return answer = () => {
        setTimeout ((fn) => {
        let x = delay * 1000
        // fn(x) 


        }, 1000, 
    )
// Work on this section:
// Run the function only if it  hasn't been called since last delay
//  It will return a new function that can only 
// be executed once per timeout period — 
// and if the function is invoked during the timeout period, the timeout period restarts. 

    }
}

const tappingSignal = () => {
    console.log('Signal tapping...')
}

deBounce(tappingSignal)

/*
 It will return a new function that can only be executed once per timeout period 
 — and if the function is invoked during the timeout period, the timeout period restarts. 
*/





/* CLass Notes









*/ 
