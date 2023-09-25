require('dotenv').config()

const express=require('express')
const router = require('./routes/router')
const cors=require('cors')




const server=express()

//integrate fe
server.use(cors())



server.use (express.json())


server.use(router)


require('./db/connection')



 
const port=5001 || process.env.port



 server.listen(port,()=>{
    console.log(`……..server started at port number ${port}…..d`);
    })
    


   //server.post('/register',(req,res)=>{
  //  res.send("post method working")
  // })

  // server.post('/login',(req,res)=>
  // {
  //  console.log(req.body.accno);
   // console.log(req.body.psw);
  //  res.send("login worked")
  // })

   //server.get ('/getexc',(req,res)=>
   //{
  //  res.send("get worked")
   
  // })
    