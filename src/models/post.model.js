const mongoose = require("mongoose");


// Create Schema → defines structure (rules of data)
const postSchema = new mongoose.Schema({  // rules
    image: String,
    caption: String,
})


const postModel = mongoose.model("post", postSchema)  // "post"(collection Name) 👉 📁 folder name (MongoDB collection → posts)


module.exports = postModel;
// postModel 👉 👨‍💻 helper (used to save & get data)

// Analogy --->
// 📄 Form rules → what fields allowed
// 📁 Folder → where data is stored
// 👨‍💻 Helper → who puts data in folder
// Database ---> Collection 
// Database (instagramDB)
//    ↓
// Collection (posts)
//    ↓
// Document ({ img, cap })
