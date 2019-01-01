const mongoose = require("mongoose");

const category = new mongoose.Schema({
    title: String,
    image: String,
    number: String
}, {versionKey: false})

module.exports = mongoose.model("category", category)