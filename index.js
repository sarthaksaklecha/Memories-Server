import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended: true})) // express.json() can be used as well;
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))

// Routes
import postRoute from "./routes/posts.js";

app.use('/posts', postRoute); // first param tells the base url for all the postRoute calls


//mongoDB connection URL
const CONNECTION_URL = "mongodb+srv://sarthaksaklecha:ilovescience@cluster0.pdevg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true , useUnifiedTopology:true}) // extra params not required but are used to avoid warnings
        .then(()=> app.listen(PORT, ()=>console.log(`server running on port : ${PORT}`)))
        .catch((err)=> console.log(error.messsage));

// to avoid warnings
mongoose.set("useFindAndModify", false);
