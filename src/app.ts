import express from 'express';
import productsRouter from './routes/products.router';
import userRouter from './routes/user.router';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(userRouter);

export default app;
