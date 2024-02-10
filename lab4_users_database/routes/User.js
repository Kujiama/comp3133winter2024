const express = require('express');
const User = require('../models/User');
const app = express();

//

// getting all users from the database
app.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// getting users by its id
app.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(user == null){
            return res.status(404).json({message: 'User not found'});
        }
        res.json(user);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
});


// creating a new user
app.post('/', async (req, res) => {
    
    const user = new User({ 
        ...req.body // spread operator to get all the fields from the request body
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = app; // Export the router