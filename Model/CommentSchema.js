const mongoose=require("mongoose");

const user=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        length:1000
    },
    author:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
    }
})

module.exports=mongoose.model("userr",user);