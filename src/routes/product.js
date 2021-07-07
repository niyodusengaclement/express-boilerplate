import { createLoanProduct } from 'controllers/ProductsController';
import express from 'express';
import { asyncWrapper } from 'utils/asyncWrapper';
import { productValidator } from 'validations/ProductValidations';

const router = express.Router();

router.post('/create', asyncWrapper(productValidator), asyncWrapper(createLoanProduct));

export default router;
