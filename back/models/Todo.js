const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({

    text: {type: String},
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Todos", todoSchema);
