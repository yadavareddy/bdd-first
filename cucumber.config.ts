import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000); // Set a timeout of 60 seconds

export default {
    paths: ['features/**/*.feature'], // Path to feature files
    require: ['features/step_definitions/*.ts'], // Path to step definitions
    format: ['html:reports/cucumber_report.html'], // Optional: for HTML report generation
    publishQuiet: true, // Optional: disables publishing to the Cucumber dashboard
};