import {
  createCategoryDto,
  getCategoryDto,
} from "../dto/categories/category-dto.js";
import CategoryService from "../services/category/category-service.js";


const service = new CategoryService();

export const getCategories = async (req, res) => {

    console.log(req.query);
  const { error } = getCategoryDto.validate(req.query);
  if (error) return res.status(400).send(error.details[0].message);

  service
    .getCategories(req.query)
    .then(async (result) => {
      res.send(await result);
    })
    .catch(async (err) => {
        console.error(err);
      res.status(400).send(await err);
    });
};

export const createCategory = async (req, res) => {
  const { error } = createCategoryDto.validate(req.query);
  if (error) return res.status(400).send(error.details[0].message);

  service
    .createCategory(req.body)
    .then(async (result) => {
      res.send(await result);
    })
    .catch(async (err) => {
      res.status(400).send(await err);
    });
};
