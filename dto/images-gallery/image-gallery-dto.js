import Joi from "joi";

const imageGalleryDto = Joi.object({
  imageUrl: Joi.string().max(255).required,
});

export default imageGalleryDto;
