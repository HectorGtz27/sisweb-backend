"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./src/connection/connection"));
// Se importa apiRouter de la carpeta src/routes para poder utilizarlo en el archivo index.ts y
// poder crear las rutas de la aplicacion
const routes_1 = __importDefault(require("./src/routes"));
// App guarda la instancia de express. Se declara como una constante para que no se pueda reasignar.
const app = (0, express_1.default)();
// Se utiliza morgan para loggear las peticiones que se realizan al servidor.
const morgan = require("morgan");
const port = 3000;
// Se utiliza morgan para loggear las peticiones que se realizan al servidor. Se coloca como un middleware.
// Que es un middleware? Rta: Es una funcion que se ejecuta antes de que se ejecute la funcion principal.
// Porque se pone dev? Rta: Porque es el formato de loggeo que se va a utilizar.
app.use(morgan("dev"));
// Aqui se utiliza express.json() para poder parsear el body de las peticiones que se realizan al servidor.
app.use(express_1.default.json());
// Se utiliza apiRouter para poder crear las rutas de la aplicacion.
app.use(routes_1.default);
// Se utiliza connectionDB para poder conectarse a la base de datos.
(0, connection_1.default)();
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
