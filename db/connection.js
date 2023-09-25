const mongoose=require('mongoose')


mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true


}).then(()=>{
    console.log("____ Mongodb Atlas Connected");
}).catch(()=>{
    console.log("___Mdb Atlas not connected_____");
})