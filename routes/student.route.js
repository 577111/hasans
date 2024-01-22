const express =require('express');
const router= express.Router();

router.get("/student",(req,res)=>{
    res.send("i am student route")
})