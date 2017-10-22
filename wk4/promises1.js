// Promises
// Create an asynchronous promise
// Thesis: When you call a promise-based asynch function, it returns a Promise instance (see below)


// If the promise is succesful, the data will load. 
// If not, an error is shown. 

// getFakeMembers creates a promise
const getFakeMembers = count => new Promise((resolves, rejects) =>{
    const api = 'https://api.randomuser.me/?nat=US&results=${count}'
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = ()  =>
        (request.status === 200) ? 
        resolves(JSON.parse(request.response).results):
        reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
})

//  Now we need to call the promise.
// 'then' function is used to chain to do something after promise fulfilled. 

getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("cannot load members from randomuser.me")
    )//Attaches to accept/reject for resolution of promise
)