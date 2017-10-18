
let maybePromise = new Promise((resolve, reject) => {
let value = Math.random() >0.5
if (value) resolve("good")
if (!value) reject( new Error("bad"))
})

maybePromise
 .then(maybePromise)
 .then(maybePromise)
 .then(maybePromise)
 .then(maybePromise) 
 .then((value) => console.log('ok', value) 
 .catch(value => console.log('NOT OK!'))