import postMessage from "../models/postMessage.js";

export const getPosts = (req,res) => {
    postMessage.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).send(err))
}

export const createPosts = (req, res) => {
    const post = new postMessage({
        title : "first post",
        message : "bananas are the best",
        creator: "leslie chow",
        potty : "muddy"
    });
    post.save();
    res.send(post)
}

