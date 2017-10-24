// function lone_sum(a, b, c) {
//     let arr = [a, b, c]; 
//     // if one value is repeated in a list, remove any other occurence.
//     arr = arr.filter(function(item, index, self) {
//     new_arr = self.indexOf(item) == index
//     return sum(new_arr)
//     });
// }

// Rewrite function using || as you did originally
// function lone_sum(a, b, c) {
//  if ((a === b) && (a ===c )) {
//    console.log(0)
//    return
//  }if (a === b) {
//    console.log(c)
//    return
//  }if (a === c) {
//    console.log(b)
//    return
//  }if (b === c) {
//    console.log(a+c)
//    return
//  }else {
//   console.log(a+b+c)
//  }
// }
// const loneSum = (...myList) => {
//     return myList
//     .filter((value) => myList.filter(num)=> num === value).length ===1)
//     .reduce((total, value) => total + value, 0)
// }
// console.log(myList)


// WARMUPS

// Let P be the Principal = 1000.00  //money 'P' that wants to invest    
// Let Y // how many years 'Y' this sum has to be kept in the bank to amount to 'D'.
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00

// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30

// How many years 'Y' this sum has to be kept in the bank to amount to 'D'.

const P = 1000.00
// const Y = ''
const I = 0.5
const T = 0.18
const D = 1100.00

let earningsPerYear = (P * I)
let taxesOnInterest = T * (perAnnum - P)
  

// tax is the rate on the earnest earned. 