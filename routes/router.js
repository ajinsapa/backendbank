const express=require('express')
const { register,login,getBalance,moneyTransfer,accountStatement, accountDelete } = require('../controllers/logic')
const { jwtMiddleware } = require('./middlewares/jwtMiddleware')




const router=new express.Router()

//register
router.post('/bankuser/create_acc',register)

//login

router.post('/bankuser/login',login)

//balance


router.get('/bankuser/balance/:acno',jwtMiddleware,getBalance)


//money transfer

router.post('/bankuser/money-transfer',jwtMiddleware,moneyTransfer)

//account statement

router.get('/bankuser/account-statement/:acno',jwtMiddleware,accountStatement)

//delete

router.delete('/bankuser/deleteaccount/:acno',jwtMiddleware,accountDelete)









module.exports=router