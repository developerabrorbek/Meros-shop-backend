import Joi from "joi"

export const CategorySchema = Joi.object({
  name : Joi.string().max(99).required()
}).required()