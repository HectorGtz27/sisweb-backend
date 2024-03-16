import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";

const connection = new Sequelize({
  database: "sisweb_db",
  dialect: "postgres",
  username: "sisweb_user",
  password: "HDK#$%Ljkwerff.89",
  storage: ":memory:",
  models: [Product],
});

// Esto sincroniza la base de datos con el modelo. Borra la base de datos y la vuelve a crear.
// Pero si se pone alter: true, entonces no borra la base de datos, sino que la altera.
async function connectionDB() {
  try {
    await connection.sync({ alter: true });
  } catch (e) {
    console.log(e);
  }
}
export default connectionDB;
