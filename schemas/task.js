const mongoose = require('mongoose');

const {Schema} = mongoose;
const taskSchema = new Schema({
    content : {
        type : String,
    },
    createAt : {
        type : Date
    }
});

module.exports = mongoose.model('Task', taskSchema);