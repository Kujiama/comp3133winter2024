const express = require("express");
const restaurantModel = require("../Models/Restaurant");
const app = express();

// // getting all restaurants from the database
// app.get("/restaurants", async (req, res) => {
//   const restaurants = await restaurantModel.find({});
//   try {
//     res.status(200).send(restaurants);
//   } catch (err) {
//     res.status(500).send;
//   }
// });

// getting a restaurant by its type of Cuisine
// http://localhost:8081/restaurant/cuisine/Italian
app.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  const cuisine = req.params.cuisine;
  const restaurants = await restaurantModel.find({ cuisine: cuisine });
  try {
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

// getting a restaurant by its city
// http://localhost:8081/restaurant/city/London
app.get("/restaurants/city/:city", async (req, res) => {
  const city = req.params.city;
  const restaurants = await restaurantModel.find({ city: city });
  try {
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send;
  }
});

// getting a restaurant in ascending order
// http://localhost:8081/restaurants?sortBy=ASC
// http://localhost:8081/restaurants?sortBy=DESC
app.get("/restaurants", async (req, res) => {
    const sortBy = req.query.sortBy;
    let sortOption = {};

    if (sortBy === "ASC") {
        sortOption = { 'name': 1 };
    } else if (sortBy === "DESC") {
        sortOption = { 'name': -1 };
    }

    try {
        const restaurants = await restaurantModel.find().sort(sortOption);
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.get("/restaurants/Delicatessen", async (req, res) => {
  try {
    const query = restaurantModel.find({
      cuisine: "Delicatessen",
      city: { $ne: "Brooklyn" },
    });

    const restaurants = await query.exec();
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================POST======================

// posting a new restaurant to the database
app.post("/restaurant", async (req, res) => {
  const restaurant = new restaurantModel(req.body);
  try {
    await restaurant.save();
    res.status(201).send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete a restaurant by its ID
// http://localhost:8081/restaurant/60174acfcde1ab2e78a3a9b0
app.delete("/restaurant/:id", async (req, res) => {
  try {
    const restaurant = await restaurantModel.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      res.status(404).send("No item found");
    }
    res.status(200).send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});

// const sampleRestaurants = [
//     { name: "Sakura", city: "Tokyo", cuisine: "Japanese" },
//     { name: "La Pasta", city: "Rome", cuisine: "Italian" },
//     { name: "Dough & Sugar", city: "New York", cuisine: "Bakery" },
//     { name: "Ocean's Catch", city: "Miami", cuisine: "Seafood" },
//     { name: "Spicy Delight", city: "Delhi", cuisine: "Indian" },
//     // Adding Delicatessen cuisine that are not in Brooklyn
//     { name: "Delica", city: "New York", cuisine: "Delicatessen" },
//     { name: "Gourmet Deli", city: "Manhattan", cuisine: "Delicatessen" },
//     { name: "Fine Foods", city: "Queens", cuisine: "Delicatessen" }
// ];

//add restaurants to the database
// restaurantModel.create(sampleRestaurants)

module.exports = app;
