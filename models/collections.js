const mongoose=require('mongoose')

const usersSchema=new mongoose.Schema({

    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transactions:[] 

})

const users=new mongoose.model("users",usersSchema)

module.exports=users