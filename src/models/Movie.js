import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  review: { type: Number },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
