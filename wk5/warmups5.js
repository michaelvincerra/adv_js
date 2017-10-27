// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

  

// split
// join
// slice
// splice
// remove words in middle; count those words
// stitch together char0 + num + char-1
// if(words > 3)....



function abbreviate(words) {    // const longWords = ['internationalization']
    let re = /^[a-zA-Z]{4,}$/
    let chars = []
    // chars = splitup.split(longWords)
    for (let i=0; i < words.length; i ++) {
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


// const longWords = ['internationalization']


    // let splitup = words.split()
// console.log(splitup) 




// }
// return sliced


// [0] [-1]


// splice the word
// find the number of characters spliced
// join the characters together