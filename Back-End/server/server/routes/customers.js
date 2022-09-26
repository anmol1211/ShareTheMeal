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


router.get('/all', (request, response) => {
  const statement = `select * from customers`
  db.execute(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})
// cid        
// cname      
// cphone     
// cemail     
// cpassword  
// citypincode
// router.post('/', (request, response) => {
//   console.log(request.body)
//   const { cname, cphone,cemail,cpassword,citypincode} = request.body
//   const statement = `insert into customers (id, name, email,password) values ('${cname}', '${cphone}', '${email}', '${cemail}','${cpassword}','${citypincode}')`
//   db.execute(statement, (error, result) => {
//     response.send(utils.createResult(error, result))
//   })
// })

router.post('/signup', (request, response) => {
    const { cname, cphone,cemail,cpassword,citypincode} = request.body
  
    console.log(request.body)
  
    // encrypt the password
    //const encryptedPassword = '' + crypto.SHA256(password)
  
    // by default every user will be non-verified
    const statement = `insert into customers (cname, cphone,cemail,cpassword,citypincode) values ('${cname}', '${cphone}',  '${cemail}','${cpassword}','${citypincode}')`
  
  
    db.execute(statement, (error, data) => {
      const result = utils.createResult(error, data)
      if (!error) {
        response.send(result)
      } else {
        response.send(result)
      }
    })
  })

module.exports = router
