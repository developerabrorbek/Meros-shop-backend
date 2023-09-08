import { UnprocessableException } from "../exception/unprocessable.exception.js";
import { ExceptionHandlerMiddleware } from "./exception-handler.middleware.js";

export const ValidateSchemaMiddleware = (schema) => {
	return (req, res, next) => {
		try {
			const { error, value } = schema.validate(req.body);

			if (error) {
				throw new UnprocessableException(error.message);
			}

			req.body = value;
			next();
		} catch (error) {
      next(error)
    }
	};
};
