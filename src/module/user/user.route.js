import { Router } from "express";
import UserController from "./user.controller.js";
import { ValidateSchemaMiddleware } from "../../middleware/validate-schema.middleware.js";
import { UserSchema } from "./dtos/user.dto.js";
import { UserUpdateSchema } from "./dtos/user-update.dto.js";

export const UserRoutes = Router()
	.get("/all", UserController.retrieveAllUsers)
	.get("/user/:id", UserController.retrieveUser)
	.post(
		"/user/add",
		ValidateSchemaMiddleware(UserSchema),
		UserController.addUser
	)
	.patch(
		"/user/edit/:id",
		ValidateSchemaMiddleware(UserUpdateSchema),
		UserController.updateUser
	)
	.delete("/user/delete/:id", UserController.deleteUser);
