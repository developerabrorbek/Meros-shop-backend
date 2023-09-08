import Joi from "joi"

export const SignUpSchema = Joi.object({
  name : Joi.string().min(6).max(99).required(),
  password : Joi.string().min(4).max(12).required(),
  phone : Joi.string().max(19).required(),
  email : Joi.string().email().required()
}).required()