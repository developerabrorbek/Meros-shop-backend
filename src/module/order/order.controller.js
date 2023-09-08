import orderService from "./order.service.js";

class OrderController {
	async addOrder(req, res, next) {
		try {
			const userId = req.userId;
			const data = await orderService.addOrder({ ...req.body, userId });
			res.send({
				success: true,
				message: "Order added successfully",
				data,
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveAllOrders(req, res, next) {
		try {
			const data = await orderService.retrieveAllOrders();
			res.send({
				success: true,
				data,
			});
		} catch (error) {
			next(error);
		}
	}

	async retrieveOrdersById(req, res, next) {
		try {
			const userId = req.userId;

			const data = await orderService.retrieveOrdersById(userId);
			res.send({
				success: true,
				data,
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new OrderController();
