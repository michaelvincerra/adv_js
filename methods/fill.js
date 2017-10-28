///////////////////////////////
//         fill()           //
//////////////////////////////
// fills all the elements of an array 
// from a start index to an end index.


// arr.fill(value, start, end)

function filler1() {
let arr1 = [1, 2, 3, 4, 5]    // 3, 6, 9, 12, 15
let newArr = arr1.map((x) => x * 3).fill(100, 4)
  return newArr
}
filler1()
// console.log(arr1)


function filler2() {
let arr2 = [0, 1, 2]
// let newArr = arr2.map((x) => x++).fill({})  // Fill with empty objects or key: value pairs
let newArr = arr2.map((x) => x++).fill(0)   // Fill 
return newArr
}
filler2()
// console.log(arr2)



