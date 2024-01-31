import {
  create,
  list,
  findbyId,
  update,
  deleteById,
  evaluate,
} from "../services/movieService.js";

async function createNewMovie(req, res) {
  try {
    const { title, review } = req.body;
    const movie = await create(title, review);
    res.status(201).json(movie);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating movie.", erro: error.message });
  }
}

async function listMovies(req, res) {
  try {
    const movies = await list();
    res.status(201).json(movies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error listing movie.", erro: error.message });
  }
}

async function getMovieById(req, res) {
  try {
    const { id } = req.params;
    const movie = await findbyId(id);
    if (movie) {
      res.status(201).json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error listing movie.", erro: error.message });
  }
}

async function updateMovie(req, res) {
  try {
    const { id } = req.params;
    const { title, review } = req.body;
    const movie = await update(id, { title, review });
    res.status(201).json(movie);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating movie.", erro: error.message });
  }
}

async function deleteMovie(req, res) {
  try {
    const { id } = req.params;
    const movie = await findbyId(id);
    if (movie) {
      await deleteById(id);
      res.status(200).json({ message: "Movie deleted" });
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting movie.", erro: error.message });
  }
}

async function reviewMovie(req, res) {
  try {
    const { id } = req.params;
    const { review } = req.body;
    const movie = await evaluate(id);
    res.status(201).json(movie);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating movie.", erro: error.message });
  }
}

async function listNotReviewedMovies(req, res) {
  try {
    const movies = await list({ review: 0 });
    res.status(201).json(movies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error listing movie.", erro: error.message });
  }
}

export {
  createNewMovie,
  listMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  reviewMovie,
  listNotReviewedMovies,
};
