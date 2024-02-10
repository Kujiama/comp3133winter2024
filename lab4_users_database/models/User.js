const mongoose = require('mongoose');

// email validation
const emailValidator = (email) => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    username: {
        type: String,
        required:[true, 'Username is required'],
        unique: [true, 'Username already exists'],
        validate:{
            validator: username => username.length >= 4,
            message: 'Username must be at least 4 characters long'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        validate: { validator: emailValidator,  // custom validation  we can define the validator  outside the schema and pass it here
            message: (email) => `${email.value} is not a valid email address`
        },
        trim: true
    },

    address: {
        street: {
            type: String,
            required: [true, 'Street is required']
        },
        suite: {
            type: String,
            required: [true, 'Suite is required']
        },
        city:{
            type: String,
            required: [true, 'City is required'],
            trim: true,
            validate: {
                validator: (city) => {
                    // regex that allows only letters, spaces and hyphens
                    const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/; 
                    return cityRegex.test(city);
                },
                message: 'City name will contain only letters, spaces and hyphens'
            }
        },
        zipCode: {
            type: String,
            required: [true, 'Zip code is required'],
            validate: {
                validator: (zipCode) => {
                    // regex that allows only 5 digits, a hyphen and 4 digits
                    const zipCodeRegex = /^\d{5}-\d{4}$/; 
                    return zipCodeRegex.test(zipCode);
                },
                message: 'Zip code must be in the format XXXXX-XXXX'
            }
        },
        geo: {
            lat: {
                type: String,
                required: [true, 'Latitude is required']
            },
            lng: {
                type: String,
                required: [true, 'Longitude is required']
            }
        }
    },

    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
            validator: (phone) => {
                // regex that allows only 1 digit, a hyphen, 3 digits, a hyphen, 3 digits and 4 digits
                // example: 1-123-456-7890
                const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/;
                return phoneRegex.test(phone);
            },
            message: 'Phone number must be in the format x-XXX-XXX-XXXX'
        }
    },
    
    url: {
        type: String,
        required: [true, 'URL is required'],
        validate: {
            validator: (url) => {
                // check if it is http or https then the domain name
                const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;                 
                return urlRegex.test(url);
            },
            message: url => `${url.value} is not a valid URL`
        }
    },

    company: {
        name: {
            type: String,
            required: [true, 'Company name is required']
        },
        catchPhrase: {
            type: String,
            required: [true, 'Catch phrase is required']
        },
        bs: {
            type: String,
            required: [true, 'Business strategy is required']
        }
    }

    
});

module.exports = mongoose.model('User', userSchema); // Export the model
