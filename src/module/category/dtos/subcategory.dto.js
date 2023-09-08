import Joi from "joi";

export const SubCategorySchema = Joi.object({
	name: Joi.string().max(99).required(),
	parentId: Joi.number().required(),
}).required();
