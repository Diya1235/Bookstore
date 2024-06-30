import express from 'express';
import mongoose from 'mongoose';
import bookRouter from "./route/book.route.js";
import userroute from "./route/user.route.js";
import cors from 'cors';
const app = express();

import dotenv from 'dotenv';


dotenv.config();

const port = process.env.PORT || 4000;
const url = process.env.MONGODBURL;
try{
 mongoose.connect(url);
 console.log("Connected with the database");
}
catch(e)
{
console.log(e);
}
app.use(cors());
app.use(express.json());

//defining routes
app.use("/book",bookRouter);
app.use("/user",userroute);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})