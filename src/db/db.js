const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:l4U1iU2MSn3labM6@mern-backend.pz8sktc.mongodb.net/project1")

    console.log("Connected to DB");
    
}

module.exports = connectDB;