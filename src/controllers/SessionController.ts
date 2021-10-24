import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Cliente from '../models/Cliente';
import AppError from '../errors/AppError';

class SessionController {
  public async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const cliente = await Cliente.findOne({ email }).select('+password');

    if (!cliente) {
      throw new AppError('Invalid email or password', 409);
    }

    const isPasswordRight = await bcrypt.compare(password, cliente.password);

    if (!isPasswordRight) {
      throw new AppError('Invalid email or password', 409);
    }

    const token = jwt.sign({ id: cliente.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES_IN
    });

    cliente.password = undefined;

    return response.json({ cliente, token });
  }
}

export default SessionController;
