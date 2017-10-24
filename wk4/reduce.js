 ///////////////////////////////
//         reduce()          //
///////////////////////////////

// Reduce ALL items in an array to ONE value
// Reduce passes the callback 4 arguments:
// currentVal
// previousVal
// currentIndex
// Array that is called on reduce

arr = [0,1,2,3]
const total = arr.reduce(function(sum, value) {
  console.log(`current sum ${sum}`)
  console.log(`current value ${value}`)  
  return sum + value;
}, 1);
console.log(total)



arr1 = [1, 2, 3, 4, 5]

let total1 = arr1.reduce(function(previousVal, currentVal){
  return previousVal + currentVal
}, 0 // This sets the default value of the first iteration
)
console.log(total1)



// Reduce accepts two params: total, amount (accumulator)
// Loop starts with total value as one at start (1227.81),
// Current 'amount' is the next value at right
// Purpose: add current 'total' to the 'amount'
// which is then repeated for as many values there are items in the arry. 

const euro_expenses = [1227.81, 746.77]
const sum = euro_expenses.reduce((total, amount) => total + amount)

console.log(sum)
