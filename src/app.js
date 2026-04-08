const express = require("express"); 
const multer = require('multer'); 
// (used to handle file uploads like images, videos, etc.)
const app = express();// Create an Express app instance
// app.use(express.json()); // Middleware to parse JSON data from request body


const upload = multer({storage : multer.memoryStorage()}) 

// Useful when you want to directly process or send file to cloud (AWS, Cloudinary, etc.)


app.post("/create-post",upload.single("img"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
})


















module.exports = app;


