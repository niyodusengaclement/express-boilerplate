import express from 'express';
import product from './product';

const routes = express.Router();

routes.use('/loanproducts', product);

export default routes;
