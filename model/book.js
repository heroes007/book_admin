var mongoose = require("mongoose");

var book = new mongoose.Schema({
    title: String,
    image: String,
    author: String,
    category: String
}, {versionKey: false},{timestamps:{createdAt: 'created_at', updateAt:'update_at'}})

module.exports = mongoose.model("book", book)