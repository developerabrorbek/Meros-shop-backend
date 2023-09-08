import express from "express";
import cors from "cors";
import { ExceptionHandlerMiddleware } from "./middleware/exception-handler.middleware.js";
import { routes } from "./route/routes.js";
import { PORT } from "./config/app.config.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded())


app.use("/api/v1", routes);


app.all("/*", (req, res) => {
	res.status(400).send({
		message: `Given ${req.url} is not found`,
	});
});


app.use(ExceptionHandlerMiddleware);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
