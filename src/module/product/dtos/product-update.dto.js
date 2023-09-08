import Joi from "joi"

export const ProductUpdateSchema = Joi.object({
  title : Joi.string().min(4).max(200),
  year : Joi.number().min(0).max(new Date().getFullYear()),
  description :Joi.string(),
  categoryId : Joi.number().min(1),
  count : Joi.number().min(1),
  price : Joi.string().min(4).max(56)
}).required()