/**
 * asyncWrapper function handles all unexpected errors
 * @name asyncWrapper
 * @description Pass the function that has req, res and next
 * @param { Function } function
 * @returns { Promise }
 */
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export { asyncWrapper };
