import express from "express"
import { addOrder, getAllOrders } from "../controllers/order.controller"
const router = express.Router()


router.get("/all-orders" , getAllOrders)
router.post("/add-order" , addOrder)

export default router