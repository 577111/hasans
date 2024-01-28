const express=require('express')
const cors=require('cors');
const app = express();
const {v4:uuidv4} =require('uuid');
const mongoose= require('mongoose');
const multer= require('multer');


//app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.static("public"));
require('dotenv').config();

const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/studentinformation";
mongoose.connect(url)
.then(()=>{
    console.log('mongodb atlas is connnected')
})
.catch((err)=>{
    console.log("error is here")
    
})

//file upload
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname+"/public/img")
    },

    filename:(req,file,cb)=>{
        const name= Date.now()+ "-"+file.originalname;
        cb(null,name);
    }
})
const upload=multer({storage:storage})


const studentSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    cname:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    mname:{
        type:String,
        required:true
    },
    brndate:{
        type:String,
        required:true
    },
    gphone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true,
    }
    
})

const studentinformation=mongoose.model("Student", studentSchema);


app.post("/addStudent",upload.single('img'),
async (req,res)=>{
    let newStudent= new studentinformation({
        id:uuidv4(),
        name:req.body.name,
        cname:req.body.cname,
        fname:req.body.fname,
        mname:req.body.name,
        brndate:req.body.brndate,
        address:req.body.address,
        gphone:req.body.gphone,
        img:req.file.filename,
    })
    newStudent.save();
    console.log('all is correct');
    res.send(newStudent)
})

app.get("/api/students", async(req,res)=>{
    const getAllStudents=await studentinformation.find();
    res.status(200).json(getAllStudents);
    console.log(getAllStudents)
})




const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);


})







