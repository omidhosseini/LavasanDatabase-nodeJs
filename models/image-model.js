import mongoose from "mongoose";


const ImageGallery = mongoose.model(
  "Image",
  new mongoose.Schema({
    imageUrl: {
      type: String,
      required: true,
    },
  })
);

export default ImageGallery;
