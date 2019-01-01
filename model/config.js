var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
    console.log("we're connected!")
});

module.exports = connection