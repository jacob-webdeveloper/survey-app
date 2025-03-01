require("dotenv").config()

const express = require("express")
const treeRoutes = require("./routes/trees")

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/trees", treeRoutes)

app.listen(process.env.PORT, () => {
    console.log("listening on port 4000")
})
