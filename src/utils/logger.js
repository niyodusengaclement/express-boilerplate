import winston from 'winston';

/**
 * logger logs the error, or any message you pass in development mode only
 * @name logger
 * @description logger logs the error, or any message you pass in development mode only
 * @returns { void }
 */
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV === 'development') {
  logger.add(new winston.transports.Console());
}

export default logger;
