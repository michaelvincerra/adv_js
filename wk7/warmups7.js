
function flatten(arr) {
// reduce
// concat
// join
  
// let cleaner = arr.split("[ \"\'\t\n\b\f\r]
  let newArr = []
  newArr = arr.join().split(',')
  // use join.  
  console.log(newArr)  
  // fromArray()
}


flatten([1, 2, [3, [4], 5, 6], 7])