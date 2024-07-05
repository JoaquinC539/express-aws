const express=require("express")
const userRoutes=require("../controllers/userController");

const routes=express.Router();
routes.use("/",userRoutes)

module.exports=routes;