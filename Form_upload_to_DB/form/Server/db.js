const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/form')
.then(()=> console.log("Mongodb Connected"))
.catch((e)=> console.log("Error: " + e));