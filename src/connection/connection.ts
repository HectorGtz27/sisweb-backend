import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";
import { Category } from "../models/category";
import { OrderProduct } from "../models/orderProduct";
import { Order } from "../models/order";

const connection = new Sequelize({
  database: "sisweb_db",
  dialect: "postgres",
  username: "sisweb_user",
  password: "HDK#$%Ljkwerff.89",
  storage: ":memory:",
  schema: "public",
  models: [Product, Category, Order, OrderProduct],
});

async function connectionDB() {
  try {
    await connection.sync({ alter: true });
  } catch (e) {
    console.log(e);
  }
}

export default connectionDB;
