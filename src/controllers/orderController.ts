import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product";
import { Order } from "../models/order";
import { OrderProduct } from "../models/orderProduct";

// Get all products using Promises
export const getAllOrders: RequestHandler = (req: Request, res: Response) => {
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query.
  Order.findAll({
    include: [
      {
        model: Product,
        attributes: ["title", "price", "rating"],
      },
    ],
  })
    .then((data: Order[] | null) => {
      return res.status(200).json({
        status: "success",
        message: "Orders successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all orders. " + err.message,
        payload: null,
      });
    });
};

// Get order by Id
export const getOrderById: RequestHandler = (req: Request, res: Response) => {
  Order.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        through: {
          attributes: [],
        },
        attributes: ["title", "price", "rating"],
      },
    ],
  })
    .then((data: Order | null) => {
      return res.status(200).json({
        status: "success",
        message: "Order successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving the order. " + err.message,
        payload: null,
      });
    });
};
