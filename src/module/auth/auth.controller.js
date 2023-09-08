import AuthService from "./auth.service.js";
import { ExceptionHandlerMiddleware } from "../../middleware/exception-handler.middleware.js";
import { NotFoundException } from "../../exception/not-found.exception.js";

class AuthController {
	constructor() {}

	async signUp(req, res) {
		try {
			const { name, email, password, phone } = req.body;

			const user = await AuthService.signUp({
				name,
				email,
				password,
				phone,
			});
			return res.status(201).send({
				success: true,
				data: {
					body: user,
				},
			});
		} catch (err) {
			next(err)
		}
	}

	async signIn(req, res, next) {
		try {
			const { phone, password } = req.body;

			const user = await AuthService.signIn({ phone, password });
			return res.send({
				success: true,
				data: {
					body: user,
				},
			});
		} catch (err) {
			next(err)
		}
	}

	async refresh(req, res) {
		try {
			const id = req.userId;
			const role = req.userRole;
			const user = await AuthService.refresh({ id, role });
			return res.send({
				success: true,
				data: {
					body: user,
				},
			});
		} catch (err) {
			next(err)
		}
	}

	async signOut(req, res) {
		try {
			const id = req.userId;
			const user = await AuthService.signOut(id);
			return res.send({
				success: true,
				data: {
					body: user,
				},
			});
		} catch (err) {
			next(err)
		}
	}
}

export default new AuthController();
