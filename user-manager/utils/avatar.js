const avatar = require('avatar-generator')()
//   order: 'background face clothes head hair eye mouth'.split(' '),
//   images: require('path').join(__dirname, './img'), // path to sprites
//   convert: 'convert'
// })

const imageSlug = new Promise((resolve, reject) => {
  avatar('apple', 'male', 400).toBuffer(function (err, buffer) {
    if (err) {
      reject(new Error('Che Cavolo!'))
    }
    resolve(`data:image/png;base64,${buffer.toString('base64')}`)
  })
  console.log(`data:image/png;base64, buffer.toString('base64')`)
})

imageSlug()
