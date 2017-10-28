///////////////////////////////
//         filter()         //
//////////////////////////////
// Creates a new array with all elements that pass the test of the provided function
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.




let words = ['yes', 'no', 'and', 'maybe']
let newWords = words.filter(function(word){   // word is the iterator
  return word.length <= 3;
}); 
console.log(newWords)


// Remove a repeated value. 
// str.indexOf(searchValue[, fromIndex])
// returns the index of the first occurrence of the specified value, 
// help
function removeDuplicates(numbers) {
    // find the value that's repeated; and find its index pos
    // filter must be a Boolean
    let unique = numbers.filter(function(elem, indexPos) {  
      console.log(elem)
      console.log(indexPos)
      return numbers.indexOf(elem) === indexPos;
      
      // indexOf() ONLY returns the first occurence of unique values; excludes repeated values
   })
      return unique
  }
  console.log(removeDuplicates([19, 29, 47, 19]))
  
  
let arr1 = [1, 2, 3, 1]
console.log(indexOf(1))


  // EXAMPLE
  function tryMe(words) {
  var uniqueArray = words.filter(function(valueOfi, indexPos) {
    // indexOf() ONLY returns the first occurence of unique values; excludes repeated values
    return words.indexOf(valueOfi) == indexPos;
  });
  return uniqueArray
}

  console.log(tryMe(['mike','james','james','alex']))

// filter out only those items that are strings. 


function something(value) {
  arr = []
  for(i = 0; i <value.length; i ++) {
    if(typeof value[i] === 'string'){
       arr.push(value[i])
    }  
   }
   return arr
}
something(["sal", "jack", 1])

// something()
let somethingElse = ["sal", "jack", 1]
let somethingCompletelyDifferent = somethingElse.filter(elem => 
    typeof elem === 'string'      
  )
console.log(somethingCompletelyDifferent)

// let somethingElse = ["sal", "jack", 1]
// let somethingCompletelyDifferent = somethingElse.filter(function(elem){
//     return typeof elem === 'string'      
//     console.log(elem)
//     }
//   )
// console.log(somethingCompletelyDifferent)

let wordsOfWisdom = [1, 2, "hilarious", "obstinate"]
// Here filter is used to apply a function to a specific array. 
let fromageNuoveau = wordsOfWisdom.filter(something()) 

console.log(fromageNuoveau)
  



// const checkIfString = () => {
  
//   let arr = ['swiss', 'cheddar', 1, 2]
//   let fromageNuoveau = arr.filter(function checkIfString(i) {
//       return (typeof i === 'string')  
//       })
//       console.log(fromageNuoveau)
//     }
//     checkIfString()



const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];
let longWords = words.filter(word => word.length < 6);
console.log(longWords)

