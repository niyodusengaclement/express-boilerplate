import ProductLoansModel from 'models/ProductLoansModel';
import { onError, onSuccess } from 'utils/response';

/**
 * createLoanProduct creates the product and returns response to the client
 * @param { Request } req user request
 * @param { Response } res response
 * @returns
 */
const createLoanProductService = async (req, res) => {
  const { group_id } = req.body;
  const currProduct = await ProductLoansModel.findOne({
    where: { group_id },
  });
  if (currProduct) return onError(res, 409, 'Product of this group already exists');
  const product = await ProductLoansModel.create(req.body);
  return onSuccess(res, 201, 'Product created successfully', product);
};

export { createLoanProductService };
