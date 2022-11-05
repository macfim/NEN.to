"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const movie_1 = __importDefault(require("./controllers/movie"));
const genre_1 = __importDefault(require("./controllers/genre"));
const MONGODB_URI_DEV = process.env.MONGODB_URI;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default
    .connect(MONGODB_URI_DEV)
    .then(() => console.log(`connected to ${MONGODB_URI_DEV}`))
    .catch(() => console.log(`failed to connect ${MONGODB_URI_DEV}`));
app.use("/api/movies", movie_1.default);
app.use("/api/genres", genre_1.default);
exports.default = app;
