"use strict"
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const routes=require("./routes/routes");
const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use(cookieParser());




app.use("/api",routes)




module.exports=app;




