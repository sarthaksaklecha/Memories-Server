import postMessage from "../models/postMessage.js";

export const getPosts = async (req,res) => {
    try{
        let posts = await postMessage.find()
        posts = posts.json();
    }catch(err){
        res.status("404").send(err.message)
    }
}

export const createPosts = async (req, res) => {
    console.log(req.body);
    const { title,message } = req.body;
    const newPost = new postMessage({
        title : title,
        message : message,
        creator: "leslie chow"
    });
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(400).json(err.message);
    }
    
}

