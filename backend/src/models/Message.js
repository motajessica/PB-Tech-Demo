const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageSchema = new Schema({
    message: String
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;