import ordersModel from "../models/orders.model";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await ordersModel.find();
    return res.status(200).json({
      data: orders,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};

export const addOrder = async (req, res) => {
  try {
    const { name, product, quantity, price } = req.body;
    const newOrder = new ordersModel({
      name,
      product,
      quantity,
      price,
    });
    const existingOrder = await ordersModel.findOne({name});
    if (existingOrder) {
      return res.status(400).json({
        message: "Order Already Exists",
      });
    }
    newOrder.save();
    if (newOrder) {
      return res.status(201).json({
        data: newOrder,
        message: "Order Added Succesfully",
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: error,
    });
  }
};
