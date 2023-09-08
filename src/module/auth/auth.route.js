import { Router } from "express";
import AuthController from "./auth.controller.js";
import { ValidateSchemaMiddleware } from "../../middleware/validate-schema.middleware.js";
import { VerifyAccessMiddleware } from "../../middleware/verify-access.middleware.js";
import { VerifyRefreshMiddleware } from "../../middleware/verify-refresh.middleware.js";
import { SignUpSchema } from "./dtos/sign-up.dto.js";
import { SignInSchema } from "./dtos/sing-in.dto.js";

export const AuthRoutes = Router()
.post("/register", ValidateSchemaMiddleware(SignUpSchema), AuthController.signUp)
.post("/login", ValidateSchemaMiddleware(SignInSchema) ,AuthController.signIn)
.post("/refresh", VerifyRefreshMiddleware ,AuthController.refresh)
.delete("/logout", VerifyAccessMiddleware ,AuthController.signOut)