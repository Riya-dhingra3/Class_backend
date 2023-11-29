const Usermodel=require("../Model/PostSchema");
<<<<<<< HEAD
const comment=require("../Model/CommentSchema")
=======
const Comment=require("../Model/CommentSchema");

>>>>>>> e115d42cb6574818acd4acf93f728f9824d9f996
exports.deleteu=async(req,res)=>{
    try{
        const {id}=req.params;
        const ddata=await Usermodel.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"data deleted successfully",
            data:ddata
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"opps some error!!"
        })
    }
}

exports.deleteuc=async(req,res)=>{
    try{
        const {id}=req.params;
<<<<<<< HEAD
        const ddata=await comment.findByIdAndDelete(id);
=======
        const ddata=await Comment.findByIdAndDelete(id);
>>>>>>> e115d42cb6574818acd4acf93f728f9824d9f996

        res.status(200).json({
            success:true,
            message:"data deleted successfully",
            data:ddata
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"opps some error!!"
        })
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> e115d42cb6574818acd4acf93f728f9824d9f996
