import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/products', productsController.createProduct);
productsRouter.get('/products', productsController.getAllProducts);

export default productsRouter;