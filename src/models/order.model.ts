import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const query = `SELECT orders.id as id, orders.userId as userId,
      JSON_ARRAYAGG(prod.id) as productsIds
      FROM Trybesmith.Orders as orders
      INNER JOIN Trybesmith.Products as prod
      ON orders.id = prod.orderId
      GROUP BY id
      ORDER BY userId`;
    const [data] = await this.connection.execute(query);
    return data as Order[];
  }
  // https://www.tutorialspoint.com/mysql/mysql_aggregate_functions_json_arraygg.htm
}