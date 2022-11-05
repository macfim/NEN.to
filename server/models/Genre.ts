import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
});

genreSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model("Genre", genreSchema);
