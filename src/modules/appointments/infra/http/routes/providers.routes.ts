/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const appointmentsRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', providersController.index);
appointmentsRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);
appointmentsRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default appointmentsRouter;