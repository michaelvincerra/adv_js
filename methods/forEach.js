///////////////////////////////
//         forEach()         //
///////////////////////////////
//  List Building pattern

function primeSubtraction(){
    let arr=[1, 3, 5, 7]
    let newArr = []
    arr.forEach(function(num, i){   // num is param passed, or itervar; i is discarded
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

