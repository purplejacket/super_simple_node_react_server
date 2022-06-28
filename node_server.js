const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  let responseText = `
  <h1>Hello Node.js Server!</h1>
  <p>This is my own little html page, I hope you like it.</p>
  <p>It is served by a very small node server</p>
  `
  response.end(responseText)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

