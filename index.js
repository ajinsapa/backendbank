const express=require('express')



const server=express()
server.use (express.json())

const port=5000

 server.listen(port,()=>{
    console.log(`……..server started at port number ${port}…..d`);
    })


   server.post('/register',(req,res)=>{
    res.send("post method working")
   })

   server.post('/login',(req,res)=>
   {
    console.log(req.body.accno);
    console.log(req.body.psw);
    res.send("login worked")
   })

   server.get ('/getexc',(req,res)=>
   {
    res.send("get worked")
   
   })
    