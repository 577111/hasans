const express=require('express')
const app = express();
const mongoose= require('mongoose');


//app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"));
require('dotenv').config();

const url = process.env.MONGO_URL || "mongodb://localhost:27017/studentinformation";
mongoose.connect(url)
.then(()=>{
    console.log('mongodb atlas is connnected')
})
.catch((err)=>{
    console.log("error is here")
    
})


const studentSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

const studentinformation=mongoose.model("Student", studentSchema);



app.get("/", async(req,res)=>{
    const getAllStudents=await studentinformation.find();
    res.status(200).json(getAllStudents);
    console.log(getAllStudents)
})




const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);


})







