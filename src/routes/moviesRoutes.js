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
router.get("/not-reviewed-movies", listNotReviewedMovies);
router.get("/:id", getMovieById);
router.put("/:id", updateMovie);
router.patch("/:id", reviewMovie);
router.delete("/:id", deleteMovie);

export default router;
