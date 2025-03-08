const mongoose = require("mongoose")

const Schema = mongoose.Schema

const treeSchema = new Schema({
    treenum: {
        type: Number,
        required: true
    },
    photonum: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Tree", treeSchema)
