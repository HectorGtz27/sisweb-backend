import express, { Express, Request, Response } from "express";

// Se importa apiRouter de la carpeta src/routes para poder utilizarlo en el archivo index.ts y
// poder crear las rutas de la aplicacion
import apiRouter from "./src/routes";

// App guarda la instancia de express. Se declara como una constante para que no se pueda reasignar.
const app: Express = express();

// Se utiliza morgan para loggear las peticiones que se realizan al servidor.
const morgan = require("morgan");

const port = 3000;

// Se utiliza morgan para loggear las peticiones que se realizan al servidor. Se coloca como un middleware.
// Que es un middleware? Rta: Es una funcion que se ejecuta antes de que se ejecute la funcion principal.
// Porque se pone dev? Rta: Porque es el formato de loggeo que se va a utilizar.
app.use(morgan("dev"));

// Aqui se utiliza express.json() para poder parsear el body de las peticiones que se realizan al servidor.
app.use(express.json());

// Se utiliza apiRouter para poder crear las rutas de la aplicacion.
app.use(apiRouter);

// App.listen tiene la funcion de iniciar el servidor. Se ejecuta una sola vez.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Con respecto a la arquitectura MVC, app.get() es el controlador.
// Que mecanismo de programacion asincrona se utiliza en app.get()?
// Rta: Callbacks, ya que se ejecuta una vez que se cumple la condicion de la ruta.
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello Typescript!");
// });
