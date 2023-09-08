import jwt from "jsonwebtoken";
import { ExceptionHandlerMiddleware } from "./exception-handler.middleware.js";
import { AuthModel } from "../module/auth/auth.model.js";
import { ACCESS_TOKEN_SECRET_KEY } from "../config/jwt.config.js";
import { NotFoundException } from "../exception/not-found.exception.js";
import { ConflictException } from "../exception/conflict.exception.js";
import { UnprocessableException } from "../exception/unprocessable.exception.js";

export const VerifyAccessMiddleware = (req, res, next) => {
	try {
		const model = new AuthModel();
		const accessToken = req.headers["authorization"].replace("Bearer ", "");

		if (!accessToken?.length) {
			throw new NotFoundException("Provide access token");
		}

		jwt.verify(
			accessToken,
			ACCESS_TOKEN_SECRET_KEY,
			async (err, decoded) => {
				try {
					if (err) {
						if (err instanceof jwt.TokenExpiredError) {
							throw new ConflictException(
								"Token already expired"
							);
						}

						if (err instanceof jwt.JsonWebTokenError) {
							throw new ConflictException("Provide valid token");
						}

						if (err instanceof jwt.NotBeforeError) {
							throw new ConflictException(err.message);
						}
					}

					if (!(decoded?.id && decoded?.role)) {
						throw new ConflictException("Invalid access token");
					}

					const user = await model.retrieveUser(decoded.id);
					if (user?.deleted_at) {
						throw new ConflictException("User already signed out");
					}

					if (user?.access_token != accessToken) {
						throw new UnprocessableException(
							"Access token is already deleted"
						);
					}

					req.userId = user.id;
					req.userRole = user.role;
					next();
				} catch (err) {
					next(err)
				}
			}
		);
	} catch (err) {
		next(err)
	}
};
