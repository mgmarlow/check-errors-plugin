import * as program from 'commander';
import { verifySandboxes } from './lib/verify-sandboxes';
import { REPORT_TYPE } from './lib/error-reporter';

program
    .name('check-errors-plugin')
    .version('1.0.0')
    .option('--port', 'angular-playground port', 4201)
    .option('--random-scenario', 'Pick a random scenario for each sandbox')
    .option('--timeout', 'Timeout interval', 90)
    .option('--report-type', 'Type of output report', REPORT_TYPE.LOG)
    .option('--report-path', 'File path for report output')
    .parse(process.argv);

verifySandboxes(program);
