"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
(0, cucumber_1.setDefaultTimeout)(60 * 1000); // Set a timeout of 60 seconds
exports.default = {
    paths: ['features/**/*.feature'], // Path to feature files
    require: ['features/step_definitions/*.ts'], // Path to step definitions
    format: ['html:reports/cucumber_report.html'], // Optional: for HTML report generation
    publishQuiet: true, // Optional: disables publishing to the Cucumber dashboard
};
