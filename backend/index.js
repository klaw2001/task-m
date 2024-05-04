import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import router from "./routers/order.router";
import cors from "cors"
const app = express();

const PORT = process.env.PORT || 8000;

const corsoptions ={
  origin:"*"
}
app.use(cors(corsoptions))
app.use(express.json());

app.listen(PORT, () =>{ console.log("Port is running on 8000")});
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

app.use('/orders', router)