// Aqui se importa el router, request y response de express para
// poder crear las rutas de la aplicacion
import { Router, Request, Response } from "express";

// Aqui se crea una instancia de router de express, router devu
// elve un objeto de tipo router
const productRouter: Router = Router();

// Aqui se utiliza el metodo get para obtener la lista de productos
productRouter.get("/", (req: Request, res: Response) => {
  res.send("Get a list of products");
});

// Aqui se utiliza el get para obtener un solo producto con un id
productRouter.get("/:id", (req: Request, res: Response) => {
  // Manda un mensaje con el id del producto
  let id = req.params.id;
  res.send(`Get the product ${id}`);
});

// Crear un nuevo producto, el enrutador utiliza el metodo post
// para crear un nuevo producto
// Cual es la ruta de post para crear un nuevo producto: /product
productRouter.post("/", (req: Request, res: Response) => {
  // Se obtiene el id, titulo y precio del producto
  // req.boy es el cuerpo de la peticion que se envia desde el cliente
  // y se obtiene el id, titulo y precio del producto
  let id = req.body.id;
  let title = req.body.title;
  let price = req.body.price;
  // Manda un mensaje con el id, titulo y precio del producto
  res.send(
    `Create a new product with ID: ${id}, Title: ${title} and Price: ${price}`
  );
});

// Actualizar un producto, el enrutador utiliza el metodo patch para actualizar un producto
productRouter.patch("/:id", (req: Request, res: Response) => {
  res.send(
    `Update the product ${req.params.id} with title ${req.body.title}, and price of ${req.body.price}`
  );
});

// Ahora vamos a eleminar un producto, el enrutador utiliza el metodo delete
// para eliminar un producto. No se pone /:id porque se va a eliminar el producto
// y no se quiere que el usuario pueda ver el id del producto que se va a eliminar
// por eso es que en .get se pone /:id para que el usuario pueda ver el id del producto
productRouter.delete("/", (req: Request, res: Response) => {
  let id = req.body.id;
  res.send(`Deleting the product ${id}`);
});

// Se exporta el enrutador para poder utilizarlo en otros archivos
// de la aplicacion
export default productRouter;

// La diferencia entre req.body y req.params es que req.body se utiliza para obtener
// los datos que se envian desde el cliente, mientras que req.params se utiliza para
// obtener los parametros que se envian desde el cliente.
