const Usermodel = require("../Model/PostSchema");
const comment = require("../Model/CommentSchema");
exports.getbyid = async (req, res) => {
    try {
       const id=req.params.id;
       const data=await Usermodel.findById(id);

       if(!data){
        res.status(400).json({
            success:false,
            message:"no data found with this id"
        })
       }

       res.status(200).json({
        success:true,
        data:data,
        message:"found data successfully"
       })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Some error while getting the data"
        });
    }
};

exports.getbyidc = async (req, res) => {
    try {
       const id=req.params.id;
       const data=await comment.findById(id);

       if(!data){
        res.status(400).json({
            success:false,
            message:"no data found with this id"
        })
       }

       res.status(200).json({
        success:true,
        data:data,
        message:"found data successfully"
       })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Some error while getting the data"
        });
    }
};


exports.getbyidc = async (req, res) => {
    try {
       const id=req.params.id;
       const data=await comment.findById(id);

       if(!data){
        res.status(400).json({
            success:false,
            message:"no data found with this id"
        })
       }

       res.status(200).json({
        success:true,
        data:data,
        message:"found data successfully"
       })
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Some error while getting the data"
        });
    }
};
