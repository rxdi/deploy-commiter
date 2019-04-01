"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
const rxjs_1 = require("rxjs");
const graphql_request_1 = require("graphql-request");
let RequestService = class RequestService {
    request(query, variables = {}) {
        return rxjs_1.from(graphql_request_1.default('http://localhost:9000/graphql', query, variables));
    }
};
RequestService = __decorate([
    core_1.Injectable()
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map