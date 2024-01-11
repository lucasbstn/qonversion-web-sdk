"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitlementSource = exports.PeriodType = exports.RenewState = void 0;
var RenewState;
(function (RenewState) {
    RenewState["WillRenew"] = "will_renew";
    RenewState["Canceled"] = "canceled";
    RenewState["BillingIssue"] = "billing_issue";
})(RenewState = exports.RenewState || (exports.RenewState = {}));
var PeriodType;
(function (PeriodType) {
    PeriodType["Normal"] = "normal";
    PeriodType["Trial"] = "trial";
    PeriodType["Intro"] = "intro";
})(PeriodType = exports.PeriodType || (exports.PeriodType = {}));
var EntitlementSource;
(function (EntitlementSource) {
    EntitlementSource["Unknown"] = "unknown";
    EntitlementSource["AppStore"] = "appstore";
    EntitlementSource["PlayStore"] = "playstore";
    EntitlementSource["Stripe"] = "stripe";
    EntitlementSource["Manual"] = "manual";
})(EntitlementSource = exports.EntitlementSource || (exports.EntitlementSource = {}));
