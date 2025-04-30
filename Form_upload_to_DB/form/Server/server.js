const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongoose = require("./db");
const FormData = require("./schema");
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send("Hello")
})

app.post("/sendData", async (req,res)=>{
    try{
        const form = new FormData({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password 
        })
        await form.save();
        res.status(201).json({message: "Done", form});
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Fail"})
    }
})

app.listen(PORT, ()=> {
    console.log(`Server running on localhost:${PORT}...`);
})