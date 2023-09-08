import { Router } from "express";
import orderController from "./order.controller.js";
import { ValidateSchemaMiddleware } from "../../middleware/validate-schema.middleware.js";
import { OrderSchema } from "./dtos/order.dto.js";
import { VerifyAccessMiddleware } from "../../middleware/verify-access.middleware.js";

export const OrderRoutes = Router()
.post("/add", [ValidateSchemaMiddleware(OrderSchema), VerifyAccessMiddleware] ,orderController.addOrder)
.get("/all", orderController.retrieveAllOrders)
.get("/user-orders",VerifyAccessMiddleware, orderController.retrieveOrdersById)