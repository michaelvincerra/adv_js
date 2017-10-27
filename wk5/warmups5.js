// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

  

// split  Use this to handle '-'
// join
// slice
// splice
// remove words in middle; count those words
// stitch together char0 + num + char-1
// if(words > 3)....
// 



function abbreviate(words) {    // const longWords = ['internationalization']
    let re = /^[a-zA-Z]{4,}$/
    let chars = []
    // chars = splitup.split(longWords)
    for (let i=0; i < words.length; i ++) {     // TODO Replace .length with other method. 
        if(re) {
            let sliced = words.slice(1, -1)     
            let numChars = sliced.length
            let combo = words.charAt(0).concat(numChars)
            chars.push(combo + words.slice(-1))
            // console.log(chars)
        }
    }
    return chars
}
abbreviate("internationalization")
abbreviate("accessibility")
abbreviate("elephant-rides are really fun!")

// for(let i=0; i<longWords; i ++) {
// if( char in longWords > 4) {
//     let char = true
// splice the word
// find the number of characters spliced
// join the characters together


89 = 8^1 + 9^2
135 1^1 + 3^2 + 5^3


// Get a range of numbers with a low and a high
// where low and high are passed in a function as follows; 
// 


for (i=low; i<=high; i++) {
    numbers.push(i)
}

// Look up the Array.from
Array.from({length: 5}, (_, i)=> i)
Array.from({length: 5}, (_, i)=> i)

// break up numbers into individual digits
Number(10).toString().split('')

// Alternate way
output = []
while(number) {
    output.push(number % 10)
    number = Math.floor(number/10)
}



// Solve for the numerical sequence
// How to formalize this phenom?: 8^1 + 9^2
total = 1^


 Example: 
sumDigPow1(1, 10) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow2(1, 10) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

function sumDigPow3(a, b) {
    if( a === )
    
}
if 
