///////////////////////////////
//         filter()         //
//////////////////////////////


let words = ['yes', 'no', 'and', 'maybe']
let newWords = words.filter(function(word){
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

