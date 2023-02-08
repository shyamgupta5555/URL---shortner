const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://purunaik:purunaik@cluster0.zgxxxk0.mongodb.net/group5Database")
.then(()=>console.log("Connected to database."))
.catch((err)=>console.log(err.message));

const route = require("./route/route");
app.use('/',route);

app.listen(3000,(err)=>{
    if(err) return console.log(err.message);
    console.log("Application is running on port 3000.");
});

