/* eslint-disable no-console */
// TODO: https://ashwinvalento.github.io/cartoon-avatar/

const faker = require('faker')// Equivalent to the import statement. 
const md5 = require('blueimp-md5')// This sets a hash for password protection
const fetch = require('node-fetch') // This must be imported after installation from CLI

function makeBody () {
  const firstName = faker.name.firstName()
  const lastName = faker.internet.lastName()
  const email = faker.internet.email()
  const streetAddress = faker.address.streetAddress()
  const city = faker.address.city()
  const state = faker.address.state()
  const country = faker.address.country()
  const zipCode = faker.address.zipCode()
  const passwordHash = md5(faker.address.password())

  // console.log(firstName, lastName, email, streetAddress, city, state, zipCode, country)
  // console.log(passwordHash)

  return {
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    state,
    country,
    zipCode,
    passwordHash
  }
}

const createUsers = async () => {
  await fetch('https://prova1234-35cf3.firebaseio.com/thing.json', {method: 'DELETE'})

  for (let i = 0; i < 100; i++) {
    var myInit = {
      method: 'POST',
      body: JSON.stringify(makeBody())
    }

    const response = await fetch('https://prova1234-35cf3.firebaseio.com/thing.json', myInit)
    const output = await response.json()
    console.log(output)
  }
}
createUsers()
  .then(console.log)
