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

import SessionStoreValidator from './app/validators/SessionStore';

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

export default routes;
