"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPropertiesControllerImpl = void 0;
const constants_1 = require("./constants");
const QonversionError_1 = require("../../exception/QonversionError");
const UserProperties_1 = require("../../dto/UserProperties");
const UserProperty_1 = require("../../dto/UserProperty");
const UserPropertyKey_1 = require("../../dto/UserPropertyKey");
class UserPropertiesControllerImpl {
    constructor(pendingUserPropertiesStorage, sentUserPropertiesStorage, userPropertiesService, userDataStorage, delayedWorker, logger, userChangedNotifier, sendingDelayMs = constants_1.SENDING_DELAY_MS) {
        this.pendingUserPropertiesStorage = pendingUserPropertiesStorage;
        this.sentUserPropertiesStorage = sentUserPropertiesStorage;
        this.userPropertiesService = userPropertiesService;
        this.userDataStorage = userDataStorage;
        this.delayedWorker = delayedWorker;
        this.logger = logger;
        this.sendingDelayMs = sendingDelayMs;
        userChangedNotifier.subscribeOnUserChanges(this);
    }
    setProperty(key, value) {
        this.setProperties({ [key]: value });
    }
    setProperties(properties) {
        this.logger.verbose('Setting user properties', properties);
        const validatedProperties = {};
        Object.keys(properties).forEach(key => {
            if (this.shouldSendProperty(key, properties[key])) {
                validatedProperties[key] = properties[key];
            }
        });
        this.pendingUserPropertiesStorage.add(validatedProperties);
        this.sendUserPropertiesIfNeeded();
    }
    async getProperties() {
        this.logger.verbose('Requesting user properties');
        const userId = this.userDataStorage.requireOriginalUserId();
        const properties = await this.userPropertiesService.getProperties(userId);
        this.logger.verbose('User properties were received', properties);
        const mappedProperties = properties.map(userPropertyData => new UserProperty_1.UserProperty(userPropertyData.key, userPropertyData.value));
        return new UserProperties_1.UserProperties(mappedProperties);
    }
    onUserChanged() {
        this.pendingUserPropertiesStorage.clear();
        this.sentUserPropertiesStorage.clear();
    }
    sendUserPropertiesIfNeeded(ignoreExistingJob = false) {
        const pendingProperties = this.pendingUserPropertiesStorage.getProperties();
        if (Object.keys(pendingProperties).length > 0) {
            this.delayedWorker.doDelayed(this.sendingDelayMs, async () => {
                await this.sendUserProperties();
            }, ignoreExistingJob);
        }
    }
    async sendUserProperties() {
        try {
            const propertiesToSend = Object.assign({}, this.pendingUserPropertiesStorage.getProperties());
            if (Object.keys(propertiesToSend).length === 0) {
                return;
            }
            this.logger.verbose('Sending user properties', propertiesToSend);
            const userId = this.userDataStorage.requireOriginalUserId();
            const response = await this.userPropertiesService.sendProperties(userId, propertiesToSend);
            const processedProperties = {};
            response.savedProperties.forEach(savedProperty => {
                processedProperties[savedProperty.key] = savedProperty.value;
            });
            this.logger.verbose('User properties were sent', response);
            // We delete all sent properties even if they were not successfully handled
            // to prevent spamming api with unacceptable properties.
            this.pendingUserPropertiesStorage.delete(propertiesToSend);
            this.sentUserPropertiesStorage.add(processedProperties);
            this.sendUserPropertiesIfNeeded(true);
        }
        catch (e) {
            if (e instanceof QonversionError_1.QonversionError) {
                this.logger.error('Failed to send user properties to api', e);
            }
        }
    }
    shouldSendProperty(key, value) {
        let shouldSend = true;
        if (key == UserPropertyKey_1.UserPropertyKey.Custom) {
            shouldSend = false;
            this.logger.warn("Can not set user property with the key `UserPropertyKey.Custom`. " +
                "To set custom user property, use the `setCustomUserProperty` method.");
        }
        if (shouldSend && !UserPropertiesControllerImpl.isValidKey(key)) {
            shouldSend = false;
            this.logger.error(`Invalid key "${key}" for user property. ` +
                'The key should be nonempty and may consist of letters A-Za-z, numbers, and symbols _.:-.');
        }
        if (!UserPropertiesControllerImpl.isValidValue(value)) {
            shouldSend = false;
            this.logger.error(`The empty value provided for user property "${key}".`);
        }
        if (shouldSend && this.sentUserPropertiesStorage.getProperties()[key] == value) {
            shouldSend = false;
            this.logger.info(`The property with key: "${key}" and value: "${value}" ` +
                'has been sent already for the current user. SDK will not send it again to avoid any confusion.');
        }
        return shouldSend;
    }
    static isValidKey(key) {
        const regex = new RegExp(constants_1.KEY_REGEX);
        return !!key && regex.test(key);
    }
    static isValidValue(value) {
        return !!value;
    }
}
exports.UserPropertiesControllerImpl = UserPropertiesControllerImpl;
