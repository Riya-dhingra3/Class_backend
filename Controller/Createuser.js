const Usermodel=require("../Model/PostSchema");
<<<<<<< HEAD
const comment=require("../Model/CommentSchema");
exports.create=async(req,res)=>{
    try{
    const data=req.body;
=======
const Comment=require("../Model/CommentSchema");

exports.create=async(req,res)=>{
    try{
    const data=req.body;
    const {author}=req.body

>>>>>>> e115d42cb6574818acd4acf93f728f9824d9f996
    const dataa=await Usermodel.create(data);
    
    res.status(200).json({
        success:true,
        data:dataa,
        message:"data updated successfully"
            })
        }
<<<<<<< HEAD
    catch(err){
        res.status(500).json({
            success:false,
            message:"Some error",
            err: err.message
        })
    }
}

exports.createc=async(req,res)=>{
try{
    const data=req.body;
    const dataa=await comment.create(data);
    
    res.status(200).json({
        success:true,
        data:dataa,
        message:"data updated successfully"
            })
        }
=======

>>>>>>> e115d42cb6574818acd4acf93f728f9824d9f996
    catch(err){
        res.status(500).json({
            success:false,
            message:"Some error",
            err: err.message
        })
    }
}

    exports.createc=async(req,res)=>{
    try{
    const data=req.body;
    const dataa=await Comment.create(data);
    
    res.status(200).json({
        success:true,
        data:dataa,
        message:"data updated successfully"
            })
        }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Some error",
            err: err.message
        })
    }
}
