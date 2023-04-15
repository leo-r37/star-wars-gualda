const mongoose = require("mongoose");

const { Schema } = mongoose;

const filmSchema = new Schema(
  {
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    created: String,
    edited: String,
  },
  { timestamps: false }
);

module.exports = mongoose.model("Film", filmSchema);
