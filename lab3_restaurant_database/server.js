const express = require('express');
const mongoose = require('mongoose');

// environment variables



// restaurant router
const restaurantRouter = require('./Routes/RestaurantRoute');

const PORT = 8081;

const app = express();
app.use(express.json());

// Connect to MongoDB
const DB_HOST = "NETWORK CLUSTER URL HERE";
const DB_USER = 'ENTER USERNAME HERE';
const DB_PASSWORD = 'ENTER PASSWORD HERE';
const DB_NAME = 'w2024_comp3133_fri';
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

app.use(restaurantRouter); // Use the employee router

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });








