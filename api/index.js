import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.listen(3000 , () => {
    console.log('Listening to port 3000!');
});