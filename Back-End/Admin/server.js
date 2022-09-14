const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')

// list of routers
const routerUser = require('./routes/admin')
//const routerNotes = require('./routes/notes')

const app = express()

// enable frontend application to call the APIs
app.use(cors('*'))

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use((request, response, next) => {
  // skip checking the token for following APIs
  // signin and signup

  if (
    request.url == '/' ||
    request.url == '/admin' ||
    request.url == '/admin/signin' ||
    request.url == '/admin/signup' ||
    request.url == '/admin/adddonor' ||
    request.url.startsWith('/admin/verify') ||
    request.url.startsWith('/admin') ||
    request.url.startsWith('/admin/status')
  ) {
    // skip checking the token
    next()
  } else {
    // get the token from headers
    const token = request.headers['token']

    try {
      // verify if the token is original or intact
      const payload = jwt.verify(token, config.secret)

      // get id from the token
      // add the user id in the request object so that it can be used
      // in ever other APIs
      request.id = payload['id']

      // call the next handler
      next()
    } catch (ex) {
      response.send({
        status: 'error',
        error: 'unauthorized access',
      })
    }
  }
})

// add routers
app.use('/admin', routerUser)


app.get('/', (request, response) => {
  response.send('welcome to ShareTheMeal application')
})

app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on port 4000`)
})
