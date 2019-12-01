import { Router } from 'express';
import Brute from 'express-brute';
import BruteRedis from 'express-brute-redis';

import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import UserStoreValidator from './app/validators/UserStore';
import StudentStoreValidator from './app/validators/StudentStore';
import StudentUpdateValidator from './app/validators/StudentUpdate';

import PlanStoreValidator from './app/validators/PlanStore';
import PlanUpdateValidator from './app/validators/PlanUpdate';

import PlansController from './app/controllers/PlansController';
import RegistrationController from './app/controllers/RegistrationController';

import SessionStoreValidator from './app/validators/SessionStore';
import RegistrationStoreValidator from './app/validators/RegistrationStore';
import RegistrationUpdateValidator from './app/validators/RegistrationUpdate';

const routes = new Router();
const upload = multer(multerConfig);

const bruteStore = new BruteRedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const bruteForce = new Brute(bruteStore);

routes.post(
  '/sessions',
  bruteForce.prevent,
  SessionStoreValidator,
  SessionController.store
);

routes.use(authMiddleware);

routes.post('/users', UserStoreValidator, UserController.store);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/students', StudentController.index);
routes.post('/student', StudentStoreValidator, StudentController.store);
routes.put('/student/:id', StudentUpdateValidator, StudentController.update);

routes.get('/plans', PlansController.index);
routes.post('/plans', PlanStoreValidator, PlansController.store);
routes.put('/plans/:id', PlanUpdateValidator, PlansController.update);
routes.delete('/plans/:id', PlansController.delete);

routes.get('/registrations', RegistrationController.index);
routes.post(
  '/registration',
  RegistrationStoreValidator,
  RegistrationController.store
);
routes.put(
  '/registration/:id',
  RegistrationUpdateValidator,
  RegistrationController.update
);
routes.delete('/registration/:id', RegistrationController.delete);

export default routes;
