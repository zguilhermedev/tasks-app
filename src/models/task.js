const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;


