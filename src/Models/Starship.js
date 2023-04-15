const mongoose = require("mongoose");

const { Schema } = mongoose;

const starshipSchema = new Schema(
  {
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    crew: String,
    passengers: String,
    cargo_capacity: Number,
    consumables: String,
    hyperdrive_rating: Number,
    MGLT: Number,
    starship_class: String,
    created: String,
    edited: String,
  },
  { timestamps: false }
);

module.exports = mongoose.model("Starship", starshipSchema);
