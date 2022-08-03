import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {
    
  }
    
  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const data = await this.productsService.createProduct(product);
      return res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  public getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productsService.getAllProducts();
      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  };
}