import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30 * 1000); // Set default step timeout to 30 seconds

export const config = {
    paths: ['./features/*.feature'],
    require: ['./features/step_definitions/*.ts'],
    format: ['html:reports/cucumber_report.html'],
    parallel: 2, // Run 2 scenarios in parallel
};