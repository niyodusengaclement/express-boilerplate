import joi from 'joi';
import { onError } from 'utils/response';

const myCustomJoi = joi.extend(require('joi-phone-number'));

/**
 * This function validates the input data
 * @param { Request } req user request
 * @param { Response } res response
 * @param { import('express').NextFunction } next function
 * @returns { import('express').NextFunction }
 */
const productValidator = (req, res, next) => {
  const validateSchema = joi.object({
    source: joi.string().required().valid('app', 'ussd', 'APP', 'USSD').label('Source'),
    session_id: joi.string().required().label('Session'),
    group_id: joi.number().required().label('Group ID'),
    product_name: joi.string().required().label('Product Name'),
    min_amount: joi.number().required().min(1).label('Minimum amount'),
    max_amount: joi.number().required().min(1).label('Maximum amount'),
    savings_tied: joi.string().required().label('Savings Tied'),
    ratio_to_savings: joi.number().required().min(1).label('Ratio to Savings'),
    interest_period: joi.number().required().min(1).label('Interest Period'),
    max_loan_duration: joi.number().required().min(1).label('Maximum Loan Duration'),
    interest_rate_per_period: joi.number().required().min(1).label('Interest Rate'),
    loan_repayt_delay_fine: joi.number().required().min(1).label('Delay Fine Amount'),
    cashout_fee_incl: joi
      .string()
      .required()
      .valid('yes', 'no', 'Yes', 'No')
      .label('Cashout Fee Inclusion'),
    interest_type: joi.string().required().valid('simple', 'compound').label('Interest Type'),
    is_group_default: joi.string().required().valid('yes', 'no', 'Yes', 'No').label('Is Default'),
    linked_id: myCustomJoi
      .string()
      .pattern(/^[0-9]+$/)
      .required()
      .phoneNumber({ defaultCountry: 'RW', strict: true })
      .label('Phone number'),
  });
  const { error, value } = validateSchema.validate(req.body);
  if (!value) return onError(res, 400, 'Bad input');
  if (error) return onError(res, 400, error.details[0].message.split('"').join(''));
  return next();
};
export { productValidator };
