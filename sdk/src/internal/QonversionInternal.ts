import {QonversionInstance} from '../types';
import {InternalConfig} from './InternalConfig';
import {LogLevel} from '../dto/LogLevel';
import {Environment} from '../dto/Environment';
import {DependenciesAssembly} from './di/DependenciesAssembly';
import Qonversion from '../Qonversion';
import {UserProperty} from '../dto/UserProperty';
import {UserPropertiesController} from './userProperties';
import {UserController} from './user';
import {EntitlementsController} from './entitlements';
import {Entitlement} from '../dto/Entitlement';
import {PurchasesController} from './purchases';
import {PurchaseCoreData, StripeStoreData, UserPurchase} from '../dto/Purchase';

export class QonversionInternal implements QonversionInstance {
  private readonly internalConfig: InternalConfig;
  private readonly userPropertiesController: UserPropertiesController;
  private readonly userController: UserController;
  private readonly entitlementsController: EntitlementsController;
  private readonly purchasesController: PurchasesController;

  constructor(internalConfig: InternalConfig, dependenciesAssembly: DependenciesAssembly) {
    this.internalConfig = internalConfig;

    this.userPropertiesController = dependenciesAssembly.userPropertiesController();
    this.userController = dependenciesAssembly.userController();
    this.entitlementsController = dependenciesAssembly.entitlementsController();
    this.purchasesController = dependenciesAssembly.purchasesController();
  }

  sendStripePurchase(data: PurchaseCoreData & StripeStoreData): Promise<UserPurchase> {
    return this.purchasesController.sendStripePurchase(data);
  }

  getEntitlements(): Promise<Entitlement[]> {
    return this.entitlementsController.getEntitlements();
  }

  identify(userId: string): Promise<void> {
    return this.userController.identify(userId);
  }

  logout(): Promise<void> {
    return this.userController.logout();
  }

  setCustomUserProperty(key: string, value: string): void {
    this.userPropertiesController.setProperty(key, value);
  }

  setUserProperties(userProperties: Record<string, string>): void {
    this.userPropertiesController.setProperties(userProperties);
  }

  setUserProperty(property: UserProperty, value: string): void {
    this.userPropertiesController.setProperty(property, value);
  }

  finish() {
    if (Qonversion["backingInstance"] == this) {
      Qonversion["backingInstance"] = undefined
    }
  }

  setEnvironment(environment: Environment) {
    this.internalConfig.primaryConfig = {...this.internalConfig.primaryConfig, environment};
  }

  setLogLevel(logLevel: LogLevel) {
    this.internalConfig.loggerConfig = {...this.internalConfig.loggerConfig, logLevel};
  }

  setLogTag(logTag: string) {
    this.internalConfig.loggerConfig = {...this.internalConfig.loggerConfig, logTag};
  }
}
