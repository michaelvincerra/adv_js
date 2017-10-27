  /////////////////////////////
 //       Array.from()       //
//////////////////////////////

// MUST INSERT IF "Array.from" USED:  // Production steps of ECMA-262, Edition 6, 22.1.2.1
// Array.from() method creates a new Array from an array-like or iterable object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Array.from(arrayLike[, mapFn[, thisArg]])


// Create a  list of 6 arrays within which are 6 discrete objects 
// https://stackoverflow.com/questions/37949813/array-fillarray-creates-copies-by-references-not-by-value


function array6x6() {
  let m = Array.from({length: 6}, e => Array(6).fill({key:true}));
  // let m = Array.from({length: 6}, e => Array(6).fill(0));  
  return m 
  }
array6x6()