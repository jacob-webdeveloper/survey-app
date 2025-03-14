require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const treeRoutes = require("./routes/trees");
const cors = require("cors");



const app = express();

app.use(
    cors({
        origin: ["https://survey-app-jacobk.netlify.app", "http://localhost:3000", "http://localhost:4000", "https://survey-app-mlwf.onrender.com/api/trees"], 
        methods: ["GET, POST, PUT, DELETE"],
    })
)


app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

app.use("/api/trees", treeRoutes);


mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log( `Connected to MongoDB & server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

module.exports = app;



