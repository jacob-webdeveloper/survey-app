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
    waypoint: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    hollowsmall: {
        type: Number,
        required: true
    },
    hollowmedium: {
        type: Number,
        required: true
    },
    hollowlarge: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Tree", treeSchema)
