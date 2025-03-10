require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const treeRoutes = require("./routes/trees");
const cors = require("cors");


const app = express();


app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200); 
    }
    next




app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

app.use("/api/trees", treeRoutes);


mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const PORT = process.env.PORT || 4001;
        app.listen(PORT, () => {
            console.log(`✅ Connected to MongoDB & server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

module.exports = app;



