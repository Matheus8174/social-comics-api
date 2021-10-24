import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import AppError from '../../errors/AppError';

async function validateCreation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required()
  });

  try {
    const requestValidated = await schema.validateAsync(request.body);

    request.body = requestValidated;

    next();
  } catch {
    throw new AppError('credentials invalid', 400);
  }
}

export default validateCreation;
