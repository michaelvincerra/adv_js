 ///////////////////////////////
//         reduce()          //
///////////////////////////////

// Reduce accepts two params: startValue AND sum (which is accumulator)
// Loop starts with the startValue --number at start of array
// sum 'amount' is the next value at right
// Purpose: add current 'startValue' to the 'sum'

// Reduce ALL items in an array to ONE value
// Reduce passes the callback 4 arguments:
// currentVal
// previousVal
// currentIndex
// Array that is called on reduce

arr = [0,1,2,3]
const total = arr.reduce(function(startValue, sum) {
  console.log(`current startValue ${startValue}`)
  console.log(`current sum ${sum}`)  
  return startValue + sum;
}, 0);  // This sets the starting value of the first iteration
console.log(total)


arr1 = [1, 2, 3, 4, 5]

let total1 = arr1.reduce(function(previousVal, currentVal){
  return previousVal + currentVal
}, 0 // This sets the default value of the first iteration
)
console.log(total1)


// Loop starts with  the total value as number at start (1227.81),
// Current 'amount' is the next value at right
// Purpose: add current 'total' to the 'amount'
// which is then repeated for as many values as there are in the arry. 
const euro_expenses = [1227.81, 746.77, 350.00]
const sum = euro_expenses.reduce((total, amount) => total + amount)

console.log(sum)


arr1 = [1, 2, 3, 4, 5]

const newSum = arr1.reduce(function(s,v) {
  return s+v
}, 0
)
console.log(newSum)