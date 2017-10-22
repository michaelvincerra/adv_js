// Example of PROBLEM with promises. 
  // then allows it do something after the promise is fulfilled.

// Each function is called only when the previous promise is resolved.
// Therefore, it makes the the second function dependent on the previous

doSomething().then(function () {
    return doSomethingElse(); 
  });
  
  doSomething().then(function () {
    doSomethingElse();
  });
  

  doSomething().then(doSomethingElse());

  doSomething().then(doSomethingElse);