import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  PrimaryKey,
} from "sequelize-typescript";
import { Product } from "./product";
import { Order } from "./order";

interface OrderProductAttributes {
  orderId: number;
  productId: number;
  quantity: number;
}

@Table({
  tableName: "OrderProduct",
})
export class OrderProduct extends Model<
  OrderProductAttributes,
  "orderId|productId"
> {
  @PrimaryKey
  @ForeignKey(() => Product)
  @Column
  productId!: number;

  @PrimaryKey
  @ForeignKey(() => Order)
  @Column
  orderId!: number;

  @Column
  quantity?: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
