// const express = require('express')
// const db = require('../db')
// const config = require('../config')
// const utils = require('../utils')
// const router = express.Router()

// router.get('/', (request, response) => {
//   const statement = `select * from donor where rid = ${request.id}`
//   db.execute(statement, (error, result) => {
//     response.send(utils.createResult(error, result))
//   })
// })

// router.post('/', (request, response) => {
// //   rid        
// // rname      
// // raddr      
// // rphone     
// // remail     
// // rpassword  
// // citypincode
// // raddr,rphone, remail,rpassword,
//   const { rid, rname,citypincode} = request.body
//   const statement = `insert into donor (rid, rname, citypincode) values ('${rid}', '${rname}', '${citypincode}')`
//   db.execute(statement, (error, result) => {
//     response.send(utils.createResult(error, result))
//   })
// })

// module.exports = router


const express = require('express')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')
const router = express.Router()

// id      
// name    
// email   
// password


router.get('/', (request, response) => {
  const statement = `select * from donors where userId = ${request.id}`
  db.execute(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.post('/', (request, response) => {
  console.log(request.body)
  const { id, name, email,password} = request.body
  const statement = `insert into donors (id, name, email,password) values ('${id}', '${name}', '${email}', '${password}')`
  db.execute(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

module.exports = router
