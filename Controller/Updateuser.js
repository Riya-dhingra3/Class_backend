const Usermodel=require("../Model/PostSchema");
const comment=require("../Model/CommentSchema");
exports.update=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=await Usermodel.findByIdAndUpdate(
            {_id:id}
        )
        res.status(200).json({
            success:true,
            data:data,
            message:"Data updated Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err
        })
    }
}


exports.updatec=async(req,res)=>{
    try{
        const {id}=req.params;
        
        const data=await comment.findByIdAndUpdate(
        const data=await Usermodel.findByIdAndUpdate(
            {_id:id})

        res.status(200).json({
            success:true,
            data:data,
            message:"Data updated Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err
        })
    }
}

