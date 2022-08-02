import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [data] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = data;

    return { id: insertId, ...product };
  }

  public async getAllProducts(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [data] = await this.connection.execute(query);
    return data as Product[];
  }

}