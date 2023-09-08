import { Router } from "express";
import { AuthRoutes } from "../module/auth/auth.route.js";
import { CategoryRoutes } from "../module/category/category.route.js";
import { UserRoutes } from "../module/user/user.route.js";
import { ProductRoutes } from "../module/product/product.route.js";
import { OrderRoutes } from "../module/order/order.route.js";

export const routes = Router()
	.use("/auth", AuthRoutes)
	.use("/category", CategoryRoutes)
	.use("/users", UserRoutes)
	.use("/products", ProductRoutes)
	.use("/orders", OrderRoutes)
