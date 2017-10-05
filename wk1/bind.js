const myObject = {
x: 12,
y: 18,
adder:  function() {return this.x + this.y}
}

console.log(myObject.adder())

let myAdder = myObject.adder 

let myBoundAdder = myAdder.bind(myObject)

console.log(myBoundAdder())


// Note: To run this file, you will enter "node bind.js" in the terminal. 
