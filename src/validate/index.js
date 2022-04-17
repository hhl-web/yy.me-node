import Joi from 'joi';
export class Schema {
  create() {
    return Joi.object({
      categoty_id: Joi.number().min(1).max(4).required(),
      categoty_name: Joi.string().required(),
      title: Joi.string().required(),
      content: Joi.string().required(),
      cover_url: Joi.string().required(),
      cover_name: Joi.string().required(),
    });
  }
  searchByArticleId() {
    return Joi.object({
      article_id: Joi.string().required(),
    });
  }
  searchByCategoty() {
    return Joi.object({
      categoty_id: Joi.number().min(1).max(4).required(),
    });
  }
}
