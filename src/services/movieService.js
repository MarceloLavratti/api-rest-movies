import Movie from "../models/Movie.js";

async function create(title, review) {
  const newMovie = new Movie({
    title,
    review,
  });
  await newMovie.save();
  return newMovie;
}

async function list(filter = {}) {
  const movies = await Movie.find(filter);
  return movies;
}

async function findbyId(id) {
  const movie = await Movie.findById(id);
  return movie;
}

async function update(id, updatedFields) {
  const movie = await Movie.findById(id);
  if (!movie) {
    throw new Error("Movie not found");
  }

  for (const key in updatedFields) {
    movie[key] = updatedFields[key];
  }
  await movie.save();
  return movie;
}

async function deleteById(id) {
  await Movie.deleteOne({ _id: id });
  return;
}

async function review(id) {
  const movie = await Movie.findById(id);
  if (!movie) {
    throw new Error("Movie not found");
  }

  movie.review = movie.review + 1;

  await movie.save();
  return movie;
}

export { create, list, findbyId, update, deleteById, review };
