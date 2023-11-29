const Usermodel=require("../Model/PostSchema");

exports.update=async(req,res)=>{
    try{
        const {id}=req.params;
        const{email,phone_no,age}=req.body;
        
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
