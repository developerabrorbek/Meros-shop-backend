import Joi from "joi"

export const DoubleSubCategoryEditSchema = Joi.object({
  name : Joi.string().max(99),
  parentId : Joi.number()
}).required()