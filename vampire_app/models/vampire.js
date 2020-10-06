// Schema and Model goes here

const mongoose = require("mongoose");

// Schema
const vampireSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
  },
  hair_color: {
    type: String,
    default: 'blonde',
  },
  eye_color: String,
  dob: Date,
  loves: [{
    type: String,
  }],
  location: String,
  gender: String,
  victims: {
    type: Number,
    min: 0,
  },
}, {timestamps: true});

// Model 
const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;
