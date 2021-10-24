import { Router } from 'express';

import clienteRoutes from './cliente';
import sessionRoutes from './session';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.use(`${prefixRoutes}/clientes`, clienteRoutes);
routes.use(`${prefixRoutes}/authenticate`, sessionRoutes);

export default routes;
