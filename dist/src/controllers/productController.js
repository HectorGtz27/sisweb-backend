"use strict";
// Sequalice es para base de datos relacionales, y mongo es para base de datos no relacionales
// Neo4j es para base de datos de grafos, y es para relaciones complejas
// GraphQL es para API que no son REST, es para API que son mas complejas
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.modifyProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
//Create new product
const createProduct = (req, res) => {
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
    const product = Object.assign({}, req.body);
    product_1.Product.create(product)
        .then((data) => {
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
exports.createProduct = createProduct;
// Get all products using Promises
const getAllProducts = (req, res) => {
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
    product_1.Product.findAll()
        .then((data) => {
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
exports.getAllProducts = getAllProducts;
/// Get products by Id
const getProductById = (req, res) => {
    product_1.Product.findByPk(req.params.id)
        .then((data) => {
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
exports.getProductById = getProductById;
///Modify product
const modifyProduct = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Product in the database
    product_1.Product.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Product successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
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
exports.modifyProduct = modifyProduct;
///Delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        // El metodo destroy es un metodo asincrono, por eso se usa await
        // El where: { id } indica que se va a borrar el producto que tenga el id que se manda en el cuerpo de la peticion
        // TS trabaja con nodos y nodos es asincrono, por eso se usa el await
        yield product_1.Product.destroy({ where: { id } });
        return res.status(200).json({ message: "Product deleted" });
    }
    catch (error) {
        // res. manda una respuesta al cliente
        return res.status(500).json({
            message: "Error deleting products",
            error,
        });
    }
});
exports.deleteProduct = deleteProduct;
