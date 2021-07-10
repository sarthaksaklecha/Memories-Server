import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended: true})) // express.json() can be used as well;
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))

//mongoDB connection URL