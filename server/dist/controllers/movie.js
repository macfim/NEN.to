"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Movie_1 = __importDefault(require("../models/Movie"));
const movieRouter = express_1.default.Router();
movieRouter.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield Movie_1.default.find({}).populate("genres", "title");
        if (movies.length === 0)
            return response.json({ error: "no movies found" });
        response.json(movies);
    }
    catch (err) {
        response.status(400).json({ error: err.message });
    }
}));
movieRouter.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        console.log(id);
        const movie = yield Movie_1.default.findById(id).populate("genres", "title");
        response.json(movie);
    }
    catch (err) {
        response.status(400).json({ error: err.message });
    }
}));
movieRouter.post("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, poster, genres } = request.body;
        if (!title || !poster)
            return response
                .status(400)
                .json({ error: "title and/or poster are missing" });
        const movie = new Movie_1.default({
            title,
            poster,
            genres: genres && [],
        });
        const newMovie = yield movie.save();
        response.json(newMovie);
    }
    catch (err) {
        response.status(400).json({ error: err.message });
    }
}));
movieRouter.put("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const { title, poster } = request.body;
        if (!title && !poster)
            return response
                .status(400)
                .json({ error: "should add at least one to modifie" });
        const movie = yield Movie_1.default.findById(id);
        if (!movie)
            return response.status(400).json({ error: "movie not found" });
        const newMovie = yield Movie_1.default.findByIdAndUpdate(id, { title, poster }, { new: true });
        response.json(newMovie);
    }
    catch (err) {
        response.status(400).json({ error: err.message });
    }
}));
movieRouter.delete("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const deletedMovie = yield Movie_1.default.findByIdAndDelete(id);
        response.json(deletedMovie);
    }
    catch (err) {
        response.status(400).json({ error: err.message });
    }
}));
exports.default = movieRouter;
