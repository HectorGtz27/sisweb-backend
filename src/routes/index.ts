import { Router, Request, Response } from "express";
import productRoutes from "./productRoutes";
import orderRoutes from "./orderRoutes";

const apiRouter: Router = Router();

apiRouter.use("/product", productRoutes);
apiRouter.use("/order", orderRoutes);

apiRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default apiRouter;
