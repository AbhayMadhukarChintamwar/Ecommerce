import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();  
 

mongoose
  .connect("mongodb+srv://abhaychintamwar85:<password>@mycartshops.psibzhw.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
// app.use(express.json());

app.listen(4000, ()=>{
    console.log('Server is running on port 4000!')
})  

