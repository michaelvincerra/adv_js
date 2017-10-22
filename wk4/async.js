// Try to break the code and repair it again.

// API call to: /random-number
// return JSON
// parse JSON
// extract the value
// extract the value again
// add the two values

// LOOK UP jsonapi.org
// Standard shape of the API data call
const MAX  = 100
const FAILURE_RATE = 0.5 

function maybeFail(){
    if(Math.random() < FAILURE_RATE) {
        throw new Error('badd stuff happened')
    }
}


function ApiCall() {
    return Promise(resolve, reject) => {
        setTimeout(() => {
            try {
            maybeFail()
            const randNum = Math.floor(Math.random() * MAX) + 1
            callback({
            status: 200, 
            body: `{"data":[
                {"id": 1, 
                "type":"random", 
                "attributes":{ "value": ${randNum} }]}`
            })
            } catch (e) {
                reject(new Error("it didn't work"))
            })
          }, 500) // refers to setTimeout in milliseconds
        }



    }



function jsonParser (response) {
    return new Promise ((resolve, reject)=> {
    if(response.status !== 200) {
        reject(new Error('invlalid response code') ))
    }
    resolve(JSON.parse(response.body))
    },  100)
    })
}

function getValues(serverResponseObject) {
    // returns the shape of the data above 
    return serverResponseObject.data[0].attributes.value
}



ApiCall.all([ApiCall(), ApiCall()])
    .then(([...responses]) => {
        responses.reduce((response) => {
        const parseData1 = jsonParser(response1)
        const randNum1 = getValues(parsedata1)
        const parseData2 = jsonParser(response2)
        const randNum2 = getValues(parsedata2)
        console.log(randNum1 + randNum2)
        })
    .catch(err => {
        console.log('look what happend', err)
    })


ApiCall((response) => {
    const parseData1 = jsonParser(response1)
    const randNum1 = getValues(parsedata1)
    ApiCall((response2) => {
        const parseData2 = jsonParser(response2)
        const randNum2 = getValues(parsedata2)
    console.log(randNum1 + randNum2)
    })    
})



/*
const value1 = getValues(jsonParser(ApiCall()))
const value2 = getValues(jsonParser(ApiCall()))
console.log(value1 + value2)
*/