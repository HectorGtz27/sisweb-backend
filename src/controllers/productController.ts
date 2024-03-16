// Sequalice es para base de datos relacionales, y mongo es para base de datos no relacionales
// Neo4j es para base de datos de grafos, y es para relaciones complejas
// GraphQL es para API que no son REST, es para API que son mas complejas

// Cotroller tiene la logica del negocio

import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product";

//Create new product
export const createProduct: RequestHandler = (req: Request, res: Response) => {
  //Validate request
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Content can not be empty",
      payload: null,
    });
  }

  // Save Product in the database
  // Los 3 puntos es para hacer una copia del objeto, para no modificar el objeto original
  // Dice que el objeto que se va a crear es igual al objeto que se manda en el cuerpo de la peticion
  // Aqui se esta creando un nuevo producto
  // El .body nos dice que se va a obtener el cuerpo de la peticion osea del json
  const product = { ...req.body };
  Product.create(product)
    .then((data: Product | null) => {
      res.status(200).json({
        status: "success",
        message: "Product successfully created",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Something happened creating a product. " + err.message,
        payload: null,
      });
    });
};

// Get all products using Promises
export const getAllProducts: RequestHandler = (req: Request, res: Response) => {
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query.

  // Product.findAll es una promesa, por eso se usa el metodo then
  // Esa es la idea de las promesas ejecutar tareas asincronas y que se ejecuten en un futuro
  // findAll te devuelve todos los productos
  // En el findAll() te devuelve todos los productos con todas sus caracteristicas
  // El include para el findAll es para que te devuelva los productos con ciertas caracteristicas. Es como la logica
  // de los filtros de las busquedas.

  // Dame ejemplos de where en una consulta de sql con sequelize:
  // Op.ne es not equal, Op.gt es greater than, Op.gte es greater than or equal,
  // Op.lt es less than, Op.lte es less than or equal, Op.between es between,
  // Op.notBetween es not between,Like es case insensitive like,
  // Asi se hacen consultas con sequelize, con el metodo findAll, se le pasa un objeto con las condiciones de la consulta
  Product.findAll()
    .then((data: Product[]) => {
      return res.status(200).json({
        status: "success",
        message: "Products successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      // res. manda una respuesta al cliente
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all products. " + err.message,
        payload: null,
      });
    });
};

/// Get products by Id
export const getProductById: RequestHandler = (req: Request, res: Response) => {
  Product.findByPk(req.params.id)
    .then((data: Product | null) => {
      return res.status(200).json({
        status: "success",
        message: "Products successfully retrieved",
        payload: data,
      });
    })
    .catch((err) => {
      // res. manda una respuesta al cliente
      return res.status(500).json({
        status: "error",
        message: "Something happened retrieving all products. " + err.message,
        payload: null,
      });
    });
};

///Modify product
export const modifyProduct: RequestHandler = (req: Request, res: Response) => {
  // Validate request
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "Content can not be empty.",
      payload: null,
    });
  }

  // Save Product in the database
  Product.update({ ...req.body }, { where: { id: req.params.id } })
    .then((isUpdated) => {
      if (isUpdated) {
        return res.status(200).json({
          status: "success",
          message: "Product successfully updated",
          payload: { ...req.body },
        });
      } else {
        // res. manda una respuesta al cliente
        return res.status(500).json({
          status: "error",
          message: "Something happened updating the product. ",
          payload: null,
        });
      }
    })
    .catch((err) => {
      // res. manda una respuesta al cliente
      res.status(500).json({
        status: "error",
        message: "Something happened updating a product. " + err.message,
        payload: null,
      });
    });
};

///Delete product
export const deleteProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  try {
    // El metodo destroy es un metodo asincrono, por eso se usa await
    // El where: { id } indica que se va a borrar el producto que tenga el id que se manda en el cuerpo de la peticion

    // TS trabaja con nodos y nodos es asincrono, por eso se usa el await

    await Product.destroy({ where: { id } });
    return res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    // res. manda una respuesta al cliente
    return res.status(500).json({
      message: "Error deleting products",
      error,
    });
  }
};
