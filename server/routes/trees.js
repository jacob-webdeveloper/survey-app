const express = require("express")
const {
    getTrees,
    getTree,
    createTree,
    deleteTree,
    updateTree
} = require("../controllers/treeController")

const router = express.Router()

// Get all trees
router.get("/", getTrees)

// Get a single tree
router.get("/:id", getTree)

// POST/create a new tree
router.post("/", createTree)

// DELETE a tree
router.delete("/:id", deleteTree)

// UPDATE a tree
router.patch("/:id", updateTree)

module.exports = router