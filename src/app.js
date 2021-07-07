import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import env from 'dotenv';
import morgan from 'morgan';
import routes from 'routes';
import { onError, onSuccess } from 'utils/response';
import logger from 'utils/logger';

const app = express();
env.config();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan('combined'));
app.use(cookieParser());

app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  return onSuccess(res, 200, 'Welcome to the App API');
});

app.use('/api', routes);

app.use((req, res) => {
  return onError(res, 404, 'Endpoint not found');
});

app.use((error, req, res, next) => {
  const status = error?.status || 500;
  logger.error(error?.toString());
  return onError(res, status, error?.message);
});

export default app;
