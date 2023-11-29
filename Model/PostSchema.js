const mongoose=require("mongoose");

const user1=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    Tags:[{
        type:String,
    }],
    Comments:[{
        type:String
    }],
})

module.exports=mongoose.model("userr",user1);