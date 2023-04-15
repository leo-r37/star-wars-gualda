const mongoose = require("mongoose");

const { Schema } = mongoose;

const planetSchema = new Schema(
  {
    name: String,
    rotation_period: Number,
    orbital_period: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    created: String,
    edited: String,
  },
  { timestamps: false }
);

module.exports = mongoose.model("Planet", planetSchema);
