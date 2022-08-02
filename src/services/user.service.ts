import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public generateToken(user: User):string {
    const { username } = user;
    const expire: SignOptions = { expiresIn: '7d'};
    const token = jwt.sign({ username }, process.env.JWT_SECRET || 'MEGAsenha', expire);
    return token;
  }
  
  public async createUser(user: User):Promise<string> {
    const data = await this.userModel.createUser(user);
    const token = this.generateToken(data);
    return token;
  }

}