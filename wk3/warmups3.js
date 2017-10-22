function findDuplicates(chars, n) {

    arr = chars.toLowerCase()
    count = 0
    for(let i=0; i<arr.length; i++) {
        // repeated = arr.indexOf(i)
        // if(arr.indexOf(i).repeat(n)) {
        // how to abstract 'a'?     
        if(arr.charAt(i)==='a') {
            ++count
        }
    // arr.count()
    // // arr.match(/ /g) || []).length
    }
    return count
}
console.log(findDuplicates("aAbbcde"))

// What does this output and why? 
// 1
// 4
// 3
// 2
// See: https://blog.carbonfive.com/wp-content/uploads/2013/10/event-loop.png 

(function( delay=1000) {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

for (let i = 0; i < 5; i++) {
    setTimeout(function() { 
        console.log(i); }, i * 1000 );
  }  