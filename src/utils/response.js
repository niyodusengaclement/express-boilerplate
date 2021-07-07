/**
 * This function returns success reponse to the client
 * @param { Response } res
 * @param { number } statusCode
 * @param { string } message
 * @param { object } data
 * @returns { void }
 */
export const onSuccess = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    status_code: statusCode,
    response_msg: message,
    data,
  });
};

/**
 * This function returns error reponse to the client
 * @param { Response } res
 * @param { number } statusCode
 * @param { string } error
 * @returns { void }
 */
export const onError = (res, statusCode, error) => {
  return res.status(statusCode).json({
    status_code: statusCode,
    error,
  });
};

/**
 * This function returns internal server error response to the client
 * @param { Response } res
 * @returns { void }
 */
export const onServerError = (res) => {
  return res.status(500).json({
    status_code: 500,
    error: 'Internal Server Error',
  });
};
