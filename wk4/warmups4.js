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

///////////////////////////////
//         forEach()         //
///////////////////////////////
//  List Building pattern


function simpleSubtraction(){
    let arr=[1, 3, 5, 7]
    let newArr = []
    arr.forEach(function(num, i){
      // Why does -8, specifically, evaluate to negative prime values in reverse? 
      newArr.push(num - 8)
    })
    return newArr
  }
  console.log(simpleSubtraction())
  
  function simpleAddition() {
    let arr = [4, 16, 32, 64]
    newArr = []
    arr.forEach(function(num){
      newArr.push(num + 4)
    })
     return newArr
    }
  console.log(simpleAddition())
  
  function simpleMultiply() {
    let arr = [1, 3, 5, 7]
    newArr = []
    arr.forEach(function(num, i){
      newArr.push(num * 3)
    })
    return newArr
    }
  console.log(simpleMultiply())
  
  function relationShips() { 
    let words = ["yes ", "no ", "maybe "]
    // create an empty list so original values are not changed. 
    let newwords = []
    words.forEach(function(word) {
      newwords.push( word + "but...")    
    })
    return newwords    
    } 
  console.log(relationShips())

///////////////////////////////
//         filter()         //
//////////////////////////////

// Remove a repeated value. 
// str.indexOf(searchValue[, fromIndex])
// returns the index of the first occurrence of the specified value, 
// help
function removeDuplicates(numbers) {
    // find the value that's repeated; and find its index pos
    // filter must be a Boolean
    let unique = numbers.filter(function(item, index) {  
      return numbers.indexOf(item) === index;
      // indexOf() ONLY returns the first occurence of unique values; excludes repeated values
   })
      return unique
  }
  console.log(removeDuplicates([19, 29, 47, 19]))
  
  
  // EXAMPLE
  function tryMe(words) {
  var uniqueArray = words.filter(function(word, index) {
    // indexOf() ONLY returns the first occurence of unique values; excludes repeated values
    return words.indexOf(word) == index;
  });
  return uniqueArray
}

  console.log(tryMe(['mike','james','james','alex']))


///////////////////////////////
//         map()             //
///////////////////////////////
// The map() method creates a new array with the results 
// of calling a provided function on every element in the calling array.


function findSqrt() {
    let numbers = [1, 16, 64]
    let roots = numbers.map(Math.sqrt)
    return roots
}
console.log(findSqrt())

function divideByFour() {
  const arr = [2, 4, 8, 16, 32, 64]
  const result = arr.map(x => x/4) // Note: Also consider: parseFloat(.33) * 3, or parseFloat(.11)..(.22), etc.
      return result 
}
console.log(divideByFour())


function multiplier() {
  let numbers = [4, 16, 32, 64]
  let sums = numbers.map(function(x) {
      // IOW: Apply this function to each index pos in array
      return x * 2;
  }) 
  return sums
}
console.log(multiplier())


function divideByThree() {
  const arr1 = [86, 172, 344, 688, 1376, 2752]
  const result = arr1.map(x => x/3) 
      return result
}
console.log(divideByThree())

function divideByTwo() {
  const arr1 = [1, 3, 5, 7, 11]
  const result = arr1.map(x => x/parseInt(2)) 
      return result
}
console.log(divideByTwo())






 ///////////////////////////////
//         reduce()          //
///////////////////////////////



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