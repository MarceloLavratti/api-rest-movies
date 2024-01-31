import express from "express";
import {
  createNewMovie,
  listMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  reviewMovie,
  listNotReviewedMovies,
} from "../controllers/movieController.js";

const router = express.Router();

router.post("/", createNewMovie);
router.get("/", listMovies);

// "Dada uma lista de filmes, o sistema poder ser capaz de indicar um filme que ainda não foi avaliado;"
// Como não foi especificado exatamente qual tipo de avaliação, optei por fazer nesse formato. Os filmes que não foram avaliados, possuem uma avaliação de valor 0, portanto, são os que aparecem na lista de não avaliados. Aqueles avaliados possuem um contador que indica o número de avaliações que recebeu.
router.get("/not-reviewed-movies", listNotReviewedMovies);

router.get("/:id", getMovieById);
router.put("/:id", updateMovie);
router.patch("/:id", reviewMovie);
router.delete("/:id", deleteMovie);

export default router;
