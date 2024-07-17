const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const appmodel = require("./Models/models");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/Doctor").then(()=>{
    console.log("Database connected successfully");
}).catch(()=>{
    console.log("Database connection failed");
})

app.get("/getusers",async(req,res)=>{

const view = await appmodel.find()

res.status(200).json({
success:true,
view
})

});

app.post("/createuser",async(req,res)=>{
    const cre = await appmodel.create(req.body);

    res.status(200).json({
        success:true,
        cre
    })
})



app.listen("4500",()=>{
    console.log("The server is working at http://localhost:4500");
})