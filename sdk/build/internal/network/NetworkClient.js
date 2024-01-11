"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkClientImpl = void 0;
const types_1 = require("./types");
class NetworkClientImpl {
    async execute(request) {
        const headers = Object.assign(Object.assign({}, request.headers), { [types_1.ApiHeader.ContentType]: 'application/json', [types_1.ApiHeader.Accept]: 'application/json' });
        const body = request.body ? JSON.stringify(request.body) : undefined;
        const requestInit = {
            method: request.type,
            headers,
            body,
        };
        const response = await fetch(request.url, requestInit);
        const code = response.status;
        const data = await response.json();
        return { code, payload: data };
    }
}
exports.NetworkClientImpl = NetworkClientImpl;
