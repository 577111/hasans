const express=require('express')
const app = express();
const mongoose= require('mongoose');
const router = require('./routes/users.route');
const cors = require('cors')

// app.set("view engine","ejs")


app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(express.static("public"));
require('dotenv').config();

mongoose.connect('mongodb+srv://rakibhasan:.Rakib16105@cluster0.ie9dqwn.mongodb.net/studentInformation')
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

new studentinformation({
    id:"12545",
    name:"rakib"
}).save()

app.get("/", async(req,res)=>{
    const getAllStudents=await studentinformation.find();
    res.status(200).json(getAllStudents);
    console.log(getAllStudents)
})



const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);


})







