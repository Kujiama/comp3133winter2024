const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Import the dotenv module

const userRouter = require('./routes/User'); // Import the user router


const PORT = 8081;

const app = express();
app.use(express.json());

// Connect to MongoDB using environment variables
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_CONN = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(DB_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( (success) => {
  console.log('Success Mongodb connection')
}).catch( (error) => {
  console.log('Error Mongodb connection')
});

// localhost:8081/api/v1/user
app.use("/api/v1/user",userRouter); // Use the employee router 


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });
