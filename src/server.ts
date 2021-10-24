import './config/env';
import 'express-async-errors';
import './database/mongoConnection';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';

import routes from './routes';
import AppError from './errors/AppError';
import swaggerDocument from './swagger.json';

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.disable('x-powered-by');

app.use(routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
);

app.listen(port);
