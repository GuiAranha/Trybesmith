import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import GenerateToken from '../utils/jwt';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }
  
  public async createUser(user: User):Promise<string> {
    const data = await this.userModel.createUser(user);
    const token = GenerateToken(data);
    return token;
  }
}