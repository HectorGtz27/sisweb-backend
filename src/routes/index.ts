

// Este archivo tendra todas las rutas de la aplicacion y devolvera el unico objeto
// de tipo router que se utilizara en el archivo index.ts

// Este es el direcotrio de las rutas de la aplicacion, aqui se crearan todas las rutas
// de la aplicacion, lo cual sirve para tener un codigo mas organizado.

import { Router, Request, Response } from "express";
// Aqui se importa productRoutes de productRoutes para poder utilizarlo
import productRoutes from "./productRoutes";

// Este el router general de la aplicacion
const apiRouter: Router = Router();

// Aqui se esta utilizando el metodo use para utilizar el enrutador de productos
// El primer parametro es la ruta que se va a utilizar y el segundo parametro es el enrutador
// Siempre en que la direccion sea /producto se va a utilizar el enrutador de productos
apiRouter.use("/product", productRoutes);

// Siempre que veas algo general y no pogas nada
// Este es el enrutador a la pagina principal
apiRouter.get("/", (req: Request, res: Response) => {
  // Gracias nodemon se puede ver el cambio en el navegador sin tener que
  // reiniciar el servidor cada vez que se hace un cambio
  // Gracias morgan se puede ver en la consola las peticiones que se hacen
  // en el servidor cada vez que se hace una peticion
  res.send("Hello Typescript 4");
});

// Aqui se exporta el enrutador para poder utilizarlo en otros archivos
// de la aplicacion
export default apiRouter;
