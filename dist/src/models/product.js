"use strict";
// Esto es el ORM de sequelize, que nos permite definir los modelos de la base de datos.
// Aqui va la logica de la base de datos, como las tablas, las columnas, las relaciones, etc.
// Como estamos con typescript, vamos a usar la libreria sequelize-typescript, que nos permite definir los modelos de la base de datos con clases de typescript.
// Y se tiene que definir los contratos/interfaces de los modelos, para que typescript sepa que propiedades tiene cada modelo.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// En una relacion de uno a uno, cuantas categorias puede tener un producto? R: hasOne
// En una relacion de uno a muchos, cuantas categorias puede tener un producto? R: BelongsTo
// En una relacion de muchos a muchos, cuantas categorias puede tener un producto? R: hasMany
// En una tabla ternaria, cuantas categorias puede tener un producto? R: BelongsToMany
// Si se declara un campo nuevo, en una columna con @Column, y se quiere que sea opcional, se tiene que definir
// en la interfaz de ProductCreationAttributes, y se tiene que definir como Optional, y se tiene que definir como
// undefined, por ejemplo, si se declara un campo nuevo, como por ejemplo, color, se tiene que definir asi:
const sequelize_typescript_1 = require("sequelize-typescript");
let Product = class Product extends sequelize_typescript_1.Model {
};
exports.Product = Product;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    })
    // El ? indica que la propiedad es opcional
    ,
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "discountPercentage", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "rating", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
exports.Product = Product = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Products",
    })
    // Cuales son los tipos de datos de Sequelize? https://sequelize.org/master/variable/index.html#static-variable-DataTypes
    // Los tipos de datos en sequalize son los mismos que los de SQL, pero en mayusculas, por ejemplo, en SQL es varchar, en sequelize es STRING
], Product);
