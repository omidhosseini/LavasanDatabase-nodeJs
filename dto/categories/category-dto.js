import Joi from "joi";
import imageGalleryDto from "../images-gallery/image-gallery-dto.js";

const createCategoryDto = Joi.object({
  title: Joi.string().min(3).max(50).required,
  images: imageGalleryDto,
});

const getCategoryDto = Joi.object({
  title: Joi.string().min(3).max(50),
  pageSize: Joi.number().min(1).required(),
  pageNumber: Joi.number().min(1).required(),
});

export { createCategoryDto, getCategoryDto };
