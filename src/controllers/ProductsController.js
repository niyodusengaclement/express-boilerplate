import { createLoanProductService } from 'services/ProductsService';
import { asyncWrapper } from 'utils/asyncWrapper';

/**
 * createLoanProduct creates the products
 * @param { Request } req user request
 * @param { Response } res response
 * @returns
 */
const createLoanProduct = (req, res) => asyncWrapper(createLoanProductService(req, res));

export { createLoanProduct };
