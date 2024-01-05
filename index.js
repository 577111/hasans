const express = require('express');
const route = require('./routes/users.route');
const app = express();

express.request(route);

require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);


})

app.get("/", (req,res)=>{
    res.send({
        name:"shohrab hasan"
    })
})

