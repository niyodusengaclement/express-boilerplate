import db from 'database/models';
import { onError, onSuccess } from 'utils/response';

/**
 * createLoanProduct creates the products and returns response to the client
 * @param { Request } req user request
 * @param { Response } res response
 * @returns
 */
const createLoanProductService = (req, res) => {
  const { group_id } = req.body;
  const currProduct = db.myFirstDb.findOne({
    where: { group_id },
  });
  if (currProduct) return onError(res, 409, 'Product of this group already exists');
  const product = db.mvd_products_loans.create(req.body);
  return onSuccess(res, 201, 'Product created successfully', product);
};

export { createLoanProductService };
