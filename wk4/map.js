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


function multiplyByTwo() {
  let numbers = [4, 16, 32, 64]
  let sums = numbers.map(function(x) {
      // IOW: Apply this function to each index pos in array
      return x * 2;
  }) 
  return sums
}
multiplyByTwo()


function divideByThree() {
  const arr1 = [86, 172, 344, 688, 1376, 2752]
  const result = arr1.map(x => x/3) 
      return result
}
divideByThree()

function divideByTwo() {
  const arr1 = [1, 3, 5, 7, 11]
  const result = arr1.map(x => x/parseInt(2)) 
      return result
}
divideByTwo()

