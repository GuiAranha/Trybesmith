import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../interfaces/user.interface';

dotenv.config();

export default (user: User):string => {
  const { username } = user;
  const expire: SignOptions = { expiresIn: '7d' };
  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'MEGAsenha', expire);
  return token;
};
