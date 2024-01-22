const express=require('express')
const app = express();
const mongoose= require('mongoose');

const cors = require('cors');
const studentrouter = require('./routes/student.route');

app.use(studentrouter)

//app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(cors());
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

app.get("/student",(req,res)=>{
    res.send("i am student route")
})




const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);


})







