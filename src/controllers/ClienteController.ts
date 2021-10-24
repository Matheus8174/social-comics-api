import { Request, Response } from 'express';
import Cliente from '@models/Cliente';
import AppError from 'src/errors/AppError';

class ClienteController {
  public async listAll(request: Request, response: Response) {
    const cliente = await Cliente.find();

    return response.json(cliente);
  }

  public async create(request: Request, response: Response) {
    const { email } = request.body;

    const checkEmailExists = await Cliente.findOne({ email });

    if (checkEmailExists) {
      throw new AppError('Email already in use', 409);
    }

    const cliente = await Cliente.create(request.body);

    cliente.password = undefined;

    return response.status(201).json(cliente);
  }

  public async findOne(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const cliente = await Cliente.findById(id);

      cliente.password = undefined;

      return response.json(cliente);
    } catch {
      throw new AppError('cliente not found', 404);
    }
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const cliente = await Cliente.findByIdAndDelete(id);

      cliente.password = undefined;

      return response.json(cliente);
    } catch {
      throw new AppError('cliente not found', 404);
    }
  }

  public async update(request: Request, response: Response) {
    const { id } = request.body;

    try {
      const cliente = await Cliente.findByIdAndUpdate(id, request.body, {
        timestamps: true,
        new: true
      });

      cliente.password = undefined;

      return response.json(cliente);
    } catch {
      throw new AppError('cliente not found', 404);
    }
  }
}

export default ClienteController;
