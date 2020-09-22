import { container } from 'tsyringe';

import BCryptHashProvider from './Hashprovider/implementations/BCryptHashProvider';
import IHashProvider from './Hashprovider/models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
