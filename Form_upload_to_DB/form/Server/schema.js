const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model('FormData', formSchema);