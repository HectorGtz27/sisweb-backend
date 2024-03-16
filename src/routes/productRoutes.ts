// param se agarra del url y body se agarra del cuerpo de la peticion

import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  modifyProduct,
} from "../controllers/productController";

const productRouter: Router = Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductById);

productRouter.post("/", createProduct);

productRouter.patch("/:id", modifyProduct);

productRouter.delete("/", deleteProduct);

export default productRouter;
