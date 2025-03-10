require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const treeRoutes = require("./routes/trees")

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

if (require.main === module) {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }

  module.exports = app;

// routes
app.use("/api/trees", treeRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
    app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port", process.env.PORT)
    })
    })  
    .catch((error) => {
        console.log(error)
    })


