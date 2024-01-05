const express=require('express')
const app = express();
const router = require('./routes/users.route');

app.set("view engine","ejs")

require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);


})
app.use(router)





