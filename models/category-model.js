import mongoose from "mongoose";
import ImageGallery from "./image-model.js";

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    title: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: true,
      unique: true,
    },
    images: [ImageGallery.schema],
  })
);

export default Category;
