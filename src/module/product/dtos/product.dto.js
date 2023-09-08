import Joi from "joi"

export const ProductSchema = Joi.object({
  title : Joi.string().min(4).max(200).required(),
  year : Joi.number().max(new Date().getFullYear()).required(),
  description :Joi.string().required(),
  categoryId : Joi.number().min(1).required(),
  count : Joi.number().min(1).required(),
  price : Joi.string().max(56).required()
}).required()