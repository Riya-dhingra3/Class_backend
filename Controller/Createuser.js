const Usermodel=require("../Model/PostSchema");
const Comment=require("../Model/CommentSchema");
exports.create=async(req,res)=>{
    try{
    const data=req.body;
    const {author}=req.body
    const activeuser=await Usermodel.findOne({author}).select("_id").lean();
    if(activeuser){
        res.status(400).json({
            success:false,
            message:"User Already Exists"
        })
    }
    else{
    const dataa=await Usermodel.create(data);
    
    res.status(200).json({
        success:true,
        data:dataa,
        message:"data updated successfully"
            })
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Some error",
            err: err.message
        })
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
