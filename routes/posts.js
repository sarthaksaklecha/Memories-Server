import express from "express";

// router is a mini version of app,
// we need a router to get access to methods like get post, put just like app
const router = express.Router();

// importing functions for the requests
import { getPosts } from "../controllers/getPosts.js";

router.get('/' , getPosts);

export default router;