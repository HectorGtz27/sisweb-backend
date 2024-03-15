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
export class Product extends Model<
  ProductAttributes,
  ProductCreationAttributes
> {
  @Column
  title!: string;

  @Column({
    type: DataType.STRING,
  })
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
