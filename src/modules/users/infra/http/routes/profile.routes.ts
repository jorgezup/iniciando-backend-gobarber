/* eslint-disable import/no-unresolved */
import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated); // Somente se o usuário estiver logado

profileRouter.get('/', profileController.show);

profileRouter.put('/', profileController.update);

export default profileRouter;
