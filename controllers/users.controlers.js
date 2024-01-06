const homepage=(req,res)=>{
    res.send("hi");
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

module.exports= {homepage,teachers, students, gallary, about, classname, admin};