 ///////////////////////////////
//         reduce()          //
///////////////////////////////
arr = [0,1,2,3]
const total = arr.reduce(function(sum, value) {
  return sum + value;
}, 1);
console.log(total)