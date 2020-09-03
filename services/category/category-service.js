import _ from "lodash";
import Category from "../../models/category-model.js";

class CategoryService {
  async getCategories(req) {
    const filter = _.pick(req, "title");

    const categories = await Category.find(filter)
      .skip((req.pageNumber - 1) * req.pageSize)
      .limit(req.pageSize * 1)
      .sort({ _id: 1 });


      console.log('filter==> ',filter);

      console.log('categories==> ',categories);

    if (!categories)
      return new Promise((resolve, reject) => {
        reject("Category does not exist...");
      });

    const mapped = _.map(
      categories,
      _.partialRight(_.pick, ["title", "images"])
    );

    return mapped;
  }

  async createCategory(req) {
    const category = new Category(_.pick(req, "title", "images"));

    const result = await category
      .save()
      .then((r) => {
        return new Promise((resolve, reject) => {
          resolve(_.pick(r, "title", "images"));
        });
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          console.error(err);

          reject("Somthing has wrong...");
        });
      });

    return result;
  }
}

export default CategoryService;
