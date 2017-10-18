// function lone_sum(a, b, c) {
//     let arr = [a, b, c]; 
//     // if one value is repeated in a list, remove any other occurence.
//     arr = arr.filter(function(item, index, self) {
//     new_arr = self.indexOf(item) == index
//     return sum(new_arr)
//     });
// }

// Rewrite function using || as you did originally
// function lone_sum(a, b, c) {
//  if ((a === b) && (a ===c )) {
//    console.log(0)
//    return
//  }if (a === b) {
//    console.log(c)
//    return
//  }if (a === c) {
//    console.log(b)
//    return
//  }if (b === c) {
//    console.log(a+c)
//    return
//  }else {
//   console.log(a+b+c)
//  }
// }
// const loneSum = (...myList) => {
//     return myList
//     .filter((value) => myList.filter(num)=> num === value).length ===1)
//     .reduce((total, value) => total + value, 0)
// }
console.log(myList)

///////////////////////////////
//         forEach()         //
///////////////////////////////
function simpleSubtraction(){
    let arr=[1, 3, 5, 7]
    let newArr = []
    arr.forEach(function(num, i){
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

///////////////////////////////
//         filter()         //
//////////////////////////////







///////////////////////////////
//         map()             //
///////////////////////////////








 ///////////////////////////////
//         reduce()          //
///////////////////////////////