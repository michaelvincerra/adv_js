

function lone_sum(a, b, c) {
    let arr = [a, b, c]; 
    // if one value is repeated in a list, remove any other occurence.
    arr = arr.filter(function(item, index, self) {
    new_arr = self.indexOf(item) == index
    return sum(new_arr)
    });
}



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






// function removeDupesAndSum(a,b,c)
//     let arr = [a,b,c]
//     let unique = arr.filter(function(elem, index, self){
//         return index == self.indexOf(elem); 
//     })
// console.log(removeDupesAndSum(1,2,1))    

// console.log(lone_sum(3, 2, 3))// 2


// function lone_sum(a,b,c) {
//     const sumList = (a,b,c)
//     if(a === b || a === c || b === c){
//         let a = ''; 
//         let b = ''; 
//         let c = ''; 
//     }else{
//         let sumList = sum(sumList)    
//     }    
// }

console.log(lone_sum(3, 2, 3))// 2
console.log(lone_sum(3, 3, 3)) // 0


// function lone_sum(a,b,c) {
    
//     for(i =0; i<arr.length; i++)
// }

// const loneSum = (...myList) => {
//     return myList
//     .filter((value) => myList.filter(num)=> num === value).length ===1)
//     .reduce((total, value) => total + value, 0)
// }