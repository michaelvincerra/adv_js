///////////////////////////////
//         while()         //
//////////////////////////////

let x = 1
let y = 2

while ( x < 10) {
  x++
  x = x + y; 
  console.log(x)
}
console.log(x)


// help 
// exec function: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

email_list = ['erica@gmail.com', '123@123.net', 'xylphobe@123.org', '1234.yes.com', '' ]

let reg = /\w+[a-zA-Z0-9]\@\w+[a-zA-Z0-9]\.\w+g/,
    match;
    // Don't you need to set < email_list.length???
while(match =reg.exec(email_list.length)) {
  console.log(match); 
}







