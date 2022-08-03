import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', productsController.createProduct);
productsRouter.get('/', productsController.getAllProducts);

export default productsRouter;