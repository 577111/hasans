
const express= require('express');

const route = express.Router();

route.get("/about",(req,res)=>{
    res.send("about ms")
})