// https://github.com/psbanka/jsclass-winter-2017/blob/master/warmups/basics.md#2-missing-char

// let word = "word";
// let not = "not_a_word";
// answer = [];

// NEW METHODS
// .slice(0,2)
// .repeat()

function notString(notty){
  const phrase = String()
  const word = phrase.startsWith('not')

    if(word === true){
        answer = notty 
    }else{
        answer = 'not'+ notty 
    }
    return answer;
    // console.log(answer);
}
console.log(notString('arm'))

/*
//Try using RegExp() to solve #1

// function notStr (theStr) {
//   let patt = new RegExp('^not .+')
//   if (theStr.match(patt)) {
//     console.log('didnt change shit')
//     console.log(theStr)
//   } else {
//     let addedNot = 'not ' + theStr
//     console.log('added a not')
//     console.log(addedNot)
//   }
// }
// let strs = ['candy', 'not this', 'x', 'not bad']
// for (let i = 0; i < strs.length; i++) {
//   notStr(strs[i])
// }
*/
//nriehl [7:00 PM]


const missingChar = (s, i) => {
   return s.slice(0,i) + s.slice(i + 1, s.length)
}

console.log(missingChar('kitten', 1)) // 'ktten'
console.log(missingChar('kitten', 0)) // 'itten'
console.log(missingChar('kitten', 4)) // 'kittn'

function front3(three) {
    return three.slice(0,3).repeat(3)
  }
  console.log(front3("zombie"))
  
function stringTimes(parola, volta) {
  return parola.repeat(volta) 
}  
console.log(stringTimes("Bada", 3) + " BOOM! ")


function makeBricks(small, big, goal) {
// const makeBricks = (small, big, goal) => {}
// DON'T declare 'const' before variables small, big because the argument is already assigned. 
small = 1 * small
big = 5 * big
  if (small + big === goal) {
    return true 
  }else{
    return false 
}
}
console.log(`The answer is ` + makeBricks(1, 5, 26))

// How do I get subtotal as a variable to print in console.log()?
//  + {subtotal} + 

function receipt(subtotal) {
  tax_tip = subtotal * 0.24
  return subtotal + tax_tip
}
console.log(`Your total includes tax and tip: ` + receipt(10))



