import Joi from "joi";

export const UserUpdateSchema = Joi.object({
	name: Joi.string().min(6).max(99),
	password: Joi.string().min(4).max(12),
	phone: Joi.string().max(19),
	email: Joi.string().email(),
	role: Joi.string().max(19),
}).required();
