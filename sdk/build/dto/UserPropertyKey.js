"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPropertyKey = void 0;
/**
 * This enum class represents all defined user property keys
 * that can be assigned to the user. Provide these keys along with values
 * to {@link QonversionInstance.setUserProperty} method.
 * See [the documentation](https://documentation.qonversion.io/docs/web-sdk#properties) for more information
 */
var UserPropertyKey;
(function (UserPropertyKey) {
    UserPropertyKey["Email"] = "_q_email";
    UserPropertyKey["Name"] = "_q_name";
    UserPropertyKey["KochavaDeviceId"] = "_q_kochava_device_id";
    UserPropertyKey["AppsFlyerUserId"] = "_q_appsflyer_user_id";
    UserPropertyKey["AdjustAdId"] = "_q_adjust_adid";
    UserPropertyKey["CustomUserId"] = "_q_custom_user_id";
    UserPropertyKey["FacebookAttribution"] = "_q_fb_attribution";
    UserPropertyKey["FirebaseAppInstanceId"] = "_q_firebase_instance_id";
    UserPropertyKey["AppSetId"] = "_q_app_set_id";
    UserPropertyKey["AdvertisingId"] = "_q_advertising_id";
    UserPropertyKey["Custom"] = "";
})(UserPropertyKey = exports.UserPropertyKey || (exports.UserPropertyKey = {}));
