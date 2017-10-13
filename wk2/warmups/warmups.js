// https://github.com/psbanka/jsclass-winter-2017/blob/master/warmups/basics.md#2-missing-char

// let word = "word";
// let not = "not_a_word";
// answer = [];

// NEW METHODS: LEARN. RINSE AND REPEAT
// Array()
// .slice(0,2)
// .splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// - modifies the array in place
// indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
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

/////////// MORE PRACTICE ON .slice()  /////////////

function front3(three) {
    return three.slice(0,3).repeat(3)
  }
  console.log(front3("zombie"))

// Solve the problem functionally per Peter Banka
// function front3(inputString) {

// }

// console.log(front3());



  

function stringTimes(parola, volta) {
  return parola.repeat(volta) 
}  
console.log(stringTimes("Bada", 3) + " BOOM! ")


const stringTimes1 = function (str,n) {
  // Goal is  to solve is functionally; and to NOT use a variable
  return Array(n).fill(str).reduce((total, current) => total + str)
  return Array(n).fill(str).join('')
console.log(stringTimes1());


function makeBricks(small, big, goal) {
// Evaluates to a Boolean, T/F
// const makeBricks = (small, big, goal) => {}
// DON'T declare 'const' before variables (small, big) because arguments already assigned in function. 
small = 1 * small
big = 5 * big
  if (small + big === goal) {
    return true 
  }else{
    return false 
  }
}
console.log(`The 1st answer is ` + makeBricks(1, 5, 26))
console.log(`The 2nd answer is ` + makeBricks(1, 5, 27))


// How do I get subtotal as a variable to print in console.log()?
// Could declar as a global variable, but then it doesn't evaluate to 10.
//  + {subtotal} + ???

function receipt(subtotal) {
  let tax_tip = subtotal * 0.24
  return subtotal + tax_tip
}
console.log(`Your total includes tax and tip: ` + receipt(10))
console.log(`Your total includes tax and tip: ` + receipt(20))




function stringTimes(word, number) {
  return word.repeat(number)
}
console.log(stringTimes('Hi', 2)); 
console.log(stringTimes('Hi', 3));
console.log(stringTimes('Hi', 1)); 

// function stringBits(phrase) {
//   word = word.splice()
//   for(i = 0; i < phrase.length; i ++) {
//     if(word[i] === 2 % 1){
//       return phrase.splice()
//     }
//   }
//   let word 

//   .splice()

// }

// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
// Use spit and join

// Functions correctly
const stringBits1 = (string) => {
  const arr = string.split('')
  console.log(arr)
  const testIfOdd = (i) => i % 2 === 
  // 
  return string.split('').filter((c,i) => i % 2 ===0).join('')
}
console.log(stringBits1('Hello'))


const stringSplosion = function (str) {
  let to_return = '';
  for (let i = 0; i < str.length + 1; i++) {
      to_return = to_return + str.substring(0,i)
  }
  return to_return
};

// HELP
// convert for loop to forEach()
let words1 = ["yes ", "no ", "maybe "]
for(let i=0; i<words1.length; i++){
  words1[i]+ "but..."
}


// HELP
// How to formally add "but..." to for loop?
function relationShips() { 
let words = ["yes ", "no ", "maybe "]
  words.forEach(function(word) {
    console.log(word + 'but...')     
  })
} 
console.log(relationShips())

// Rewrite with a reduce 
const stringSplosion1 = function (str) {
  let value = '';
  // .fill fills each index position with a value
  Array(str.length).fill().forEach((_,i) => {
    value = value + str.substring(0,i+1)
  })
  return value
}

console.log(stringSplosion1('Code'));
console.log(stringSplosion1('abc'));
console.log(stringSplosion1('ab'));

// function findSmallest(a, b, c, d) {
//   // What is the difference btw Math.min() and Math.min.apply()?
//   return Math.min(10, 20, 30, 40)
// }
// console.log(findSmallest(10, 20, 30, 40))
  
function removeSmallest(numbers) {
  // Set variable to find minimum value, 
  // using spread operator ... ES6

  var min = Math.min(...numbers);
  // splice(start, deleteCount, add item[optional])
  // SYNTAX: (... indexOf(min),1): Find index of 'min' and delete 1 item
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}

console.log(removeSmallest([10, 20, 30, 40]));

//////////// MORE PRACTICE ON .slice() //////////////

// function isOdd(numbers) {
//   // Boolean. Are all numbers in array divisible by 2?
//     if (numbers % 2 === 0) {
//       return true
//     }else{
//       return false  
//       console.log('At least one number is not divisible by 2');
//     }
//   }
// console.log(isOdd(2, 4, 8, 16, 19, 32, 64));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// function even(numbers) {
//   // Boolean. Are all numbers in array divisible by 2?
//    let oddNum = numbers.filter(()=> )
//   return number % 2 ===0

//   }
//   console.log(even([4,8,9]);
  
  // arr=[]
  // for(i=0; i < arr.length; i ++)



  // arr = []
  // numbers.forEach((n, i)=> {
  //   if(n % 2 === 0){
  //   }else{
  //     return false
  //   }
  // })

  //   if (numbers % 2 !== 0) {
  //     numbers.splice()
  //   }else{
  //     return false  
  //     console.log('At least one number is not divisible by 2');
  //   }
  // }
// console.log(notSqrt([2, 4, 7]));


// function even(num) {
//   num = num % 2 ===0
//   myArray = [1,2,3,4,5,6,7,8,9,10,11,12];
//   const myEvenArray = myArray.filter(num)  
//   return myEvenArray;
// };
// console.log(even(num)); 

// const array = [1,2,3,4,5]

// for (i in array)
// console.log(i);


// for (i of array)
// console.log(i);

// array.forEach((i) => console.log(i)
}
