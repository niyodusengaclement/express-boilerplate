import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  development: {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,

    url: process.env.DEV_DATABASE_URL,
    dialect: 'mysql',
    logging: false,
  },
  test: {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,

    url: process.env.TEST_DATABASE_URL,
    dialect: 'mysql',
    logging: false,
  },
  production: {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,

    url: process.env.PROD_DATABASE_URL,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 20000,
    },
  },
};

export { dbConfig };
