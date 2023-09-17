const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    }

});

const todoData = mongoose.model("todolist", todoSchema);

module.exports = todoData;