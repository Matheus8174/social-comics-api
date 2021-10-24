import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import validatorCreate from '../middlewares/validators/validateCreation';
import ClienteController from '../controllers/ClienteController';

const clienteRoutes = Router();
const clienteController = new ClienteController();

clienteRoutes.post('/', validatorCreate, clienteController.create);
clienteRoutes.get('/', ensureAuthenticated, clienteController.listAll);
clienteRoutes.put('/', ensureAuthenticated, clienteController.update);
clienteRoutes.get('/:id', ensureAuthenticated, clienteController.findOne);
clienteRoutes.delete('/:id', ensureAuthenticated, clienteController.delete);

export default clienteRoutes;
