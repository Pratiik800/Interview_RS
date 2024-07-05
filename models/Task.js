const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'aapko nam batana pdega'],
        trim: true,
        maxlength: [20, 'name should never be more than 20 characters chalo jaldi se thik karo use'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)