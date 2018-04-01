
// 14.11.2017 //

// Advanced JS: REACT. Following is a summary per Alex Warnes. Get up to date!
// Look up the idea of a stack vs. queue.
// Stack is a data structure like: first in last out...
// Array: shift (is pop left)

// Pagination
// Server side vs. client side 
// How do we split up the data? 

// Assumptions: 
// Current "test" data 
// live environment (assign a pk on everything---sorting by the key..) 

// Solutions: 
// pull all the data --> display subset
// pull all the keys --> repeat the calls for each page
// assign PK pull only data that's needed


// We want to have server side pagination 
// See the two videos that Alex posted on Slack *YouTube. 


// 14.11.2017 //



// https://github.com/blakeembrey/code-problems/tree/master/problems/balanced-brackets

// Write a function that accepts a string consisting entirely of brackets ([](){}) 
// and returns whether it is balanced. Every "opening" bracket must be followed by a closing bracket 
// of the same type. There can also be nested brackets, which adhere to the same rule.

/*  
DATA STRUCTURE: Always consider how to break down further and on what basis. 
Divided by 2? by 3? etc. 
*/

function balanced() {
  brackets = str()
  dictBrackets = str()
  parentheses = str()

  text = str('This{} and then() that[]')  


  // Basic idea: Find the regex pattern; isolate it; then do a comparson of if left carries also a right.
  let re = newRegex(/\(\)\[\]\{\}/); 

  let splits = text.split(re)

// Use the pattern:
// if, else if (can be multiples), else.  


  if("(" &&  ")") {
    
    return true
  }
  if("[" && "]") {
    return true 
  }
  if("{" && "}") {
    return true 
  }

}

  
  
  return x

f('()[]{}(([])){[()][]}') // true
f('())[]{}') // false
f('[(])') // false
// Use the split function




