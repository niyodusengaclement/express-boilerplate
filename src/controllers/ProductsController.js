import { createLoanProductService } from 'services/ProductsService';

/**
 * createLoanProduct creates the Loan product
 * @param { Request } req user request
 * @param { Response } res response
 * @returns
 */
const createLoanProduct = (req, res) => createLoanProductService(req, res);

export { createLoanProduct };
