import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  HasMany,
  AutoIncrement,
  PrimaryKey,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import { Product } from "./product";

interface CategoryAttributes {
  id: number;
  name: string;
  products: Product[];
}

interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

@Table({
  tableName: "Categories",
})
export class Category extends Model<
  CategoryAttributes,
  CategoryCreationAttributes
> {
  // Here, TS infers Data Type from the JS Type
  // The ! means that the variable title wont be null or undefine.
  @Column
  name!: string;

  @HasMany(() => Product)
  products!: Product[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
