"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestType = exports.ApiEndpoint = exports.ApiHeader = void 0;
var ApiHeader;
(function (ApiHeader) {
    ApiHeader["Accept"] = "Accept";
    ApiHeader["ContentType"] = "Content-Type";
    ApiHeader["Authorization"] = "Authorization";
    ApiHeader["Locale"] = "User-Locale";
    ApiHeader["Source"] = "Source";
    ApiHeader["SourceVersion"] = "Source-Version";
    ApiHeader["Platform"] = "Platform";
    ApiHeader["PlatformVersion"] = "Platform-Version";
    ApiHeader["UserID"] = "User-Id";
})(ApiHeader = exports.ApiHeader || (exports.ApiHeader = {}));
var ApiEndpoint;
(function (ApiEndpoint) {
    ApiEndpoint["Users"] = "v3/users";
    ApiEndpoint["Identity"] = "v3/identities";
    ApiEndpoint["Properties"] = "properties";
})(ApiEndpoint = exports.ApiEndpoint || (exports.ApiEndpoint = {}));
var RequestType;
(function (RequestType) {
    RequestType["POST"] = "POST";
    RequestType["GET"] = "GET";
    RequestType["DELETE"] = "DELETE";
    RequestType["PUT"] = "PUT";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
