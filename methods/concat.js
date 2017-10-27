//////////////////////
//      concat()    //
//////////////////////
// Merges two or more arrays. This method does not change 
// the existing arrays, but instead returns a new array.

// See: 
// Faddahs Silly JS Tricks
// Kalob Taulien Essential JS course 
// https://codepen/io/faddah


let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

let arr3 = arr1.concat(arr2)
console.log(arr3)
console.log(arr1)



let alpha = ['a', 'b', 'c']
let alphaNums = alpha.concat(1, [2, 3])     // concatenates 3 values/ adds them to the array 
                                            // and flattens the numbers array
console.log(alphaNums)                      // New array generated.
console.log(alpha)                          // Original array unchanged.



// concatenating nested values; 

let num1 = [[1]]
let num2 = [2, [3]]

let combined = num1.concat(num2)
console.log(combined)

console.log(num1[0].push(4))

console.log(combined)