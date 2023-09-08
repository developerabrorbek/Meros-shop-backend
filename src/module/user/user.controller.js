import UserService from "./user.service.js";

class UserController {
	async addUser(req, res, next) {
		try {
			const { name, phone, password, email, role } = req.body;
			const data = await UserService.addUser({
				name,
				phone,
				password,
				email,
				role,
			});
			res.status(201).send({
				success: true,
				message: "User created successfully",
				data: data,
			});
		} catch (error) {
			next(error);
		}
	}

	async updateUser(req, res, next) {
		try {
			const { id } = req.params;
			const { name, phone, password, email, role } = req.body;
			const data = await UserService.updateUser({
				id,
				name,
				phone,
				password,
				email,
				role,
			});
			res.status(200).send({
				success: true,
				message: "User updated successfully",
				data,
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveUser(req, res, next) {
		try {
			const { id } = req.params;
			const data = await UserService.retrieveSingleUser(id);
			res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveAllUsers(req, res, next) {
		try {
			const data = await UserService.retrieveAllUsers();
			res.send({
				success: true,
				data: {
					body: data,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async deleteUser(req, res, next) {
		try {
			const { id } = req.params;
			const data = await UserService.deleteUser(id);
			res.send({
				success: true,
				message: "User deleted successfully",
				data,
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new UserController();
