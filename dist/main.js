#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
const app_module_1 = require("./app/app.module");
core_1.Bootstrap(app_module_1.AppModule).subscribe(() => { }, console.log.bind(console));
//# sourceMappingURL=main.js.map