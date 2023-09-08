export const ExceptionHandlerMiddleware = (err, _, res, __) => {
	if (err.isException) {
		return res.status(err.status).send({
			success: false,
			message: err.message,
		});
	}

	res.status(500).send({
		success: false,
		message: "Internal Server Error",
	});
};
