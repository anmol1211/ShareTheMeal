const express = require('express')
const db = require('../db')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
  console.log(request.id)
  //aid | fname | lname  | email                    | password                                                         | phone      | bod
  const statement = `select aid,fname, lname, email, password,phone,bod from admin where aid = 2`
  //  ${request.id}
  
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post('/signup', (request, response) => {
  const { fname, lname, email, password,phone,bod  } = request.body

  console.log(request.body)

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(password)

  // by default every user will be non-verified
  //aid  fname  lname  email  passw  phone  bod
  const statement = `insert into admin (fname, lname, email, password, phone,bod ) values (
    '${fname}', '${lname}', '${email}', '${encryptedPassword}','${phone}','${bod}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})

router.post('/adddonor', (request, response) => {

  // rid        
  // rname      
  // raddr      
  // rphone     
  // remail     
  // rpassword  
  // citypincode
  const { rid,rname, raddr, rphone, remail,rpassword,citypincode  } = request.body

  console.log(request.body)

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(rpassword)

  // by default every user will be non-verified
  //aid  fname  lname  email  passw  phone  bod
  const statement = `insert into donor (rid,rname, raddr, rphone, remail,rpassword,citypincode) values (
    '${rid}', '${rname}', '${raddr}', '${rphone}','${remail}','${encryptedPassword}','${citypincode}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})



router.post('/signin', (request, response) => {
  const { email, password } = request.body

  // encrypt the password
  const encryptedPassword = '' + crypto.SHA256(password)

  const statement = `select aid, fname, lname, email, phone,bod from admin 
      where email = '${email}' and password = '${encryptedPassword}'`

  db.execute(statement, (error, users) => {
    const result = {
      status: '',
    }

    if (error != null) {
      // error while executing statement
      result['status'] = 'error'
      result['error'] = error
    } else {
      if (users.length == 0) {
        // user does not exist
        result['status'] = 'error'
        result['error'] = 'User does not exist'
      } else {
        const user = users[0]

        // check the user status
        // 0: non-verified, 1: active, 2: suspended

        const payload = { id: user['aid'] }
        const token = jwt.sign(payload, config.secret)

        result['status'] = 'success'
        result['data'] = {
          token: token,
          firstName: user['fname'],
          lastName: user['lname'],
          email: user['email'],
          phone: user['phone'],
          BOD: user['bod'],
        }
      }

      console.log(result)
      response.send(result)
    }
  })
})

module.exports = router
