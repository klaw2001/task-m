import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    product: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema)