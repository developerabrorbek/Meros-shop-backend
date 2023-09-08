import Joi from "joi"

export const OrderSchema = Joi.object({
  productId : Joi.number().min(1).required(),
  address : Joi.string().min(4).required(),
  phone : Joi.string().min(8).max(19).required()
}).required()