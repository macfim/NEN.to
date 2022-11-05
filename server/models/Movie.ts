import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  genres: [
    {
      type: mongoose.Schema.Types.ObjectId,
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

export default mongoose.model("Movie", movieSchema);
