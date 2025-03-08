const express = require("express")
const {
    getTrees,
    getTree,
    createTree
} = require("../controllers/treeController")

const router = express.Router()

// Get all trees
router.get("/", getTrees)

// Get a single tree
router.get("/:id", getTree)

// POST/create a new tree
router.post("/", createTree)

// DELETE a tree
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a tree"})
})

// UPDATE a tree
router.patch("/:id", (req, res) => {
    res.json({mssg: "PATCH a tree"})
})

module.exports = router