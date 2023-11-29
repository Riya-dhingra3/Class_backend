const Usermodel=require("../Model/PostSchema");

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