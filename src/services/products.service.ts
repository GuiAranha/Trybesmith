import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public productModel: ProductsModel;

  constructor() {
    this.productModel = new ProductsModel(connection);
  }
  
  public createProduct(product: Product):Promise<Product> {
    const data = this.productModel.createProduct(product);
    return data;
  }
}