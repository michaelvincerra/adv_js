
///////////////////////////////
//         for loop         //
///////////////////////////////

for(let i=0; i<10; i++) {
    console.log(i)
    }
  ///
  
  function multi() {
  arr1 = [1,2,3]
  arr2 = []
  for(i=0; i<arr1.length; i++) {
    arr2.push(arr1[i]*3)
  }
  return arr2
  }
  multi()
  ////////////////
  // for loop strings
  
  function soundsOfReason() {
    arr = ['ad', 'pro', 're']           // Array given
    newArr = []                         // List building 
  
    for(let i=0; i<arr.length; i++) {   // For loop with block-level scope
      newArr.push(arr[i] + 'verb')      // Uses list-building pattern, with push (append) and finds arr[i] for 'each index value' + 'string' 
    // console.log(newArr)
    }
    return newArr                       // return statement appears outside of block scope
  }
  soundsOfReason()                      // function invoked
  ////////////////
  // for loop cubes
  
  function cubism() {
    cube = [1, 2, 3, 4, 5, 6, 7, 9]
    newCube=[]                          // List building pattern ensures that for loop does NOT MUTATE original list
    for(let i=0; i<cube.length; i++) {
        newCube.push(cube[i] * 3)       // Build newCube, empty list; and 'push' (append) to list each index, cube[i], * 3      
    }
    return newCube
  }
  cubism()
  console.log(cube)
  /////////////////
  
  // FIND PRIME NUMBERS
  // See also REGEX: /^1?$|^(11+?)\1+$/
  
  function isPrime(value) {
  let primes = [];
  for(let i=2; i<value; i ++) {
    primes[i] = true; 
  }
  
  let limit = Math.sqrt(value);
  for(let i=2; i<limit; i++) {
    if(primes[i] === true) {
      for(let j = i * i; j < value; j+=i){
        primes[j] = false; 
      }
    }
  } 
  for(let i=2; i<value; i++) {
    if(primes[i] === true) {
      console.log(i + " " + primes[i]);
    }
    }
  }
  isPrime(100)
  ////////////