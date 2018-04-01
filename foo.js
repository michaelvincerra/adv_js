const test = (() => {
let foo = 0
return (adder) => foo++
})()

console.log(test())
console.log(test())
console.log(test())
