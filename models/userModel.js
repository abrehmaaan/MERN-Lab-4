const mongoose = require("mongoose")
const validator = require("validator")
const citySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true,
      unique: true
    }
  });
  const City = mongoose.model('City', citySchema);
  
  const userProfileSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            let regex = /^[a-zA-Z0-9._-]{3,}$/;
            if (!regex.test(value)) {
                throw new Error("Username must contain only letters, digits, periods, underscores, and hyphens and at least 3 characters long!")
            }
        }
    },
    name: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other']
    },
    city: {
      type: String,
      required: true
    },
    dateOfBirth: Date,
    occupation: String
  });
  
  const UserProfile = mongoose.model('UserProfile', userProfileSchema);
  module.exports = UserProfile;