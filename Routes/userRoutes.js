const express=require("express");
const router=express.Router();

const {create}=require("../Controller/Createuser");
const {getbyid}=require("../Controller/Getuser");
const {update}=require("../Controller/Updateuser");
const {deleteu}=require("../Controller/Deleteuser");

router.post("/posts",create);
router.get("/post/:id",getbyid);
router.post("/post/:id",update);
router.delete("/post/:id",deleteu);

module.exports=router;