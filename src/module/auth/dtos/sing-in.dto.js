import Joi from "joi"

export const SignInSchema = Joi.object({
  password : Joi.string().min(4).max(12).required(),
  phone : Joi.string().max(19).required(),
}).required()