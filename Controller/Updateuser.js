const Usermodel=require("../Model/PostSchema");
const comment=require("../Model/CommentSchema");
<<<<<<< HEAD

=======
>>>>>>> e115d42cb6574818acd4acf93f728f9824d9f996

exports.update=async(req,res)=>{
    try{
        const {id}=req.params;
<<<<<<< HEAD
        
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
=======
        const data=await Usermodel.findByIdAndUpdate(
>>>>>>> e115d42cb6574818acd4acf93f728f9824d9f996
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
exports.updatec=async(req,res)=>{
    try{
        const {id}=req.params;
        
        const data=await comment.findByIdAndUpdate(
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

