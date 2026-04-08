const express = require("express"); 
const multer = require('multer'); 
// (used to handle file uploads like images, videos, etc.)
const app = express();// Create an Express app instance
// app.use(express.json()); // Middleware to parse JSON data from request body
const postModel = require("./models/post.model")
const uploadFile = require("./services/storage.service")
const upload = multer({storage : multer.memoryStorage()}) 

// Useful when you want to directly process or send file to cloud (AWS, Cloudinary, etc.)
 

app.post("/create-post",upload.single("img"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    app.get("/posts", async (req, res) => {

    })

    return res.status(201).json({
        message : "Post Created SucessFully",
        post
      
     })
    })

















module.exports = app;


