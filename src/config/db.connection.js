import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import { dbConfig } from './db.config';
import logger from 'utils/logger';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

/**
 * sequelizeSetup establishes the connection between user and database
 * @name sequelizeSetup
 * @description sequelizeSetup establishes the connection between user and database
 * @returns { Promise }
 */
const sequelizeSetup = () => {
  let sequelize;
  if (config.url) {
    sequelize = new Sequelize(config.url, config);
  } else {
    sequelize = new Sequelize(config.database, config.user, config.password, {
      host: config.host,
      dialect: config.dialect,
      operatorsAliases: false,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
      },
    });
  }
  return sequelize;
};

export const sequelize = sequelizeSetup();

sequelize
  .authenticate()
  .then(() => {
    logger.info('Database Connection has been established successfully');
  })
  .catch((err) => {
    logger.error(err?.toString());
  });
