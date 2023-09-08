import Joi from "joi";

export const SubCategoryEditSchema = Joi.object({
	name: Joi.string().max(99),
	parentId: Joi.number(),
}).required();
