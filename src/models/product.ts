// Esto es el ORM de sequelize, que nos permite definir los modelos de la base de datos.
// Aqui va la logica de la base de datos, como las tablas, las columnas, las relaciones, etc.
// Como estamos con typescript, vamos a usar la libreria sequelize-typescript, que nos permite definir los modelos de la base de datos con clases de typescript.
// Y se tiene que definir los contratos/interfaces de los modelos, para que typescript sepa que propiedades tiene cada modelo.

// En una relacion de uno a uno, cuantas categorias puede tener un producto? R: hasOne
// En una relacion de uno a muchos, cuantas categorias puede tener un producto? R: BelongsTo
// En una relacion de muchos a muchos, cuantas categorias puede tener un producto? R: hasMany
// En una tabla ternaria, cuantas categorias puede tener un producto? R: BelongsToMany

// Si se declara un campo nuevo, en una columna con @Column, y se quiere que sea opcional, se tiene que definir
// en la interfaz de ProductCreationAttributes, y se tiene que definir como Optional, y se tiene que definir como
// undefined, por ejemplo, si se declara un campo nuevo, como por ejemplo, color, se tiene que definir asi:
import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
} from "sequelize-typescript";
import { Optional } from "sequelize";

interface ProductAttributes {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

@Table({
  tableName: "Products",
})

// Cuales son los tipos de datos de Sequelize? https://sequelize.org/master/variable/index.html#static-variable-DataTypes
// Los tipos de datos en sequalize son los mismos que los de SQL, pero en mayusculas, por ejemplo, en SQL es varchar, en sequelize es STRING
export class Product extends Model<
  ProductAttributes,
  ProductCreationAttributes
> {
  // Esta es una forma de definir una columa
  // El @ indica que la columa es un decorador, que es una funcion que se ejecuta en tiempo de compilacion
  // El title!: string; es una forma de definir una propiedad que es requerida, y que no sea null o undefined
  @Column
  title!: string;

  // Esta es otra forma de definir una columna
  @Column({
    type: DataType.STRING,
  })
  // El ? indica que la propiedad es opcional
  description?: string;

  @Column
  price!: number;

  @Column
  discountPercentage!: number;

  @Column
  rating!: number;

  @Column
  stock!: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
