"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const movie_1 = __importDefault(require("./controllers/movie"));
const MONGODB_URI_DEV = process.env.MONGODB_URI_DEV;
const app = (0, express_1.default)();
mongoose_1.default
    .connect(MONGODB_URI_DEV)
    .then(() => console.log(`connected to ${MONGODB_URI_DEV}`))
    .catch(() => console.log(`failed to connect ${MONGODB_URI_DEV}`));
app.use("/api/movies", movie_1.default);
exports.default = app;
