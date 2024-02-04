// create a restaurant schema

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter restaurant "name"'],
        unique: true
    },
    city: {
        type: String,
        required: [true, 'Please enter "city"'],
        unique: true
    },
    cuisine: {
        type: String,
        required: [true, 'Please enter "cuisine"'],
        unique: true
    },

});


//query helpers
// sort by restaurant "name"
restaurantSchema.query.byRestaurantNameAsc = function(){
    return this.sort({"name": 1});
};

// sort by restaurant "name" in descending order
restaurantSchema.query.byRestaurantNameDesc = function(){
    return this.sort({"name": -1});
};

// sort by restaurant 


const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;

