import Order from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }
  
  public async getAllOrders():Promise<Order[]> {
    const data = await this.orderModel.getAllOrders();
    return data;
  }
}