"use strict";
// param se agarra del url y body se agarra del cuerpo de la peticion
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productRouter = (0, express_1.Router)();
productRouter.get("/", productController_1.getAllProducts);
productRouter.get("/:id", productController_1.getProductById);
productRouter.post("/", productController_1.createProduct);
productRouter.patch("/:id", productController_1.modifyProduct);
productRouter.delete("/", productController_1.deleteProduct);
exports.default = productRouter;
