const path= require("path")
const homepage =(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"))
}
 const teachers=(req,res)=>{
    res.send("teacher")
 }
const students=(req,res)=>{
    res.send("students")
}
const gallary=(req,res)=>{
    res.send("gallary")
}
const about=(req,res)=>{
    res.send("about")
}
const classname=(req,res)=>{
    res.send("class")
}
const admin=(req,res)=>{
    res.send("admin")
}

module.exports= {homepage,teachers, students, gallary, about, classname, admin}