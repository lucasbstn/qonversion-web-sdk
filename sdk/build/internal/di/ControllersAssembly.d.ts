import { ControllersAssembly, MiscAssembly, ServicesAssembly, StorageAssembly } from './types';
import { UserPropertiesController } from '../userProperties';
import { UserController } from '../user';
import { EntitlementsController } from '../entitlements';
import { PurchasesController } from '../purchases';
export declare class ControllersAssemblyImpl implements ControllersAssembly {
    private readonly miscAssembly;
    private readonly storageAssembly;
    private readonly servicesAssembly;
    private sharedUserController;
    constructor(miscAssembly: MiscAssembly, storageAssembly: StorageAssembly, servicesAssembly: ServicesAssembly);
    userPropertiesController(): UserPropertiesController;
    userController(): UserController;
    entitlementsController(): EntitlementsController;
    purchasesController(): PurchasesController;
}
