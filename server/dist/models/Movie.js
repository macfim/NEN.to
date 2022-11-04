"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    genre: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Genre",
        },
    ],
    publishedAt: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: String,
        required: true,
    },
});
movieSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
exports.default = mongoose_1.default.model("Movie", movieSchema);
