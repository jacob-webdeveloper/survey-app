const express = require("express")

const router = express.Router()

// Get all trees
router.get("/", (req, res) => {
    res.json({mssg: "GET all workouts"})
})

// Get a single tree
router.get("/:id", (req, res) => {
    res.json({mssg: "GET a single tree"})
})

// POST/create a new tree
router.post("/", (req, res) => {
    res.json({mssg: "POST a new workout"})
})

// DELETE a tree
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a new workout"})
})

// UPDATE a tree
router.patch("/:id", (req, res) => {
    res.json({mssg: "PATCH a new workout"})
})

module.exports = router