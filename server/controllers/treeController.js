const Tree = require("../models/treeModel")
const mongoose = require("mongoose")

// get all trees
const getTrees = async (req, res) => {
    const trees = await Tree.find({}).sort({createdAt: -1})

    res.status(200).json(trees)
}

// get a single tree
const getTree = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such tree"})
    }

    const tree = await Tree.findById(id)

    if (!tree) {
        return res.status(404).json({error: "No such tree"})
    }

    res.status(200).json(tree)
}

// create new tree
const createTree = async (req, res) => {
    const {treenum, photonum, waypoint, species, height, hollowsmall, hollowmedium, hollowlarge, notes} = req.body

    // add doc to db
    try {
        const tree = await Tree.create({treenum, photonum, waypoint, species, height, hollowsmall, hollowmedium, hollowlarge, notes})
        res.status(200).json(tree)
    } catch (error) {
        res.status(400).json({error: error.message})
    }  
}

// delete a tree
    const deleteTree = async (req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: "No such tree"})
        }

        const tree = await Tree.findOneAndDelete({_id: id})

        if (!tree) {
            return res.status(400).json({error: "No such tree"})
        }

        res.status(200).json(tree)
    }

// update a tree
const updateTree = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such tree"})
    }

    const tree = await Tree.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!tree) {
        return res.status(400).json({error: "No such tree"})
    }

    res.status(200).json(tree)
}



module.exports = {
    getTrees,
    getTree,
    createTree,
    deleteTree, 
    updateTree
}