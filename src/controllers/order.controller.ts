import { NextFunction, Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {
    
  }
    
  public getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.orderService.getAllOrders();
      return res.status(200).json(data); 
    } catch (err) {
      next(err);
    }
  };
}