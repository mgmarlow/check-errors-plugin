#!/usr/bin/env node
import * as program from 'commander';
import { copyFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { verifySandboxes } from './lib/verify-sandboxes';
import { REPORT_TYPE } from './lib/error-reporter';
import { removeDynamicImports } from './lib/remove-dynamic-imports';

const SANDBOXES_PATH = resolvePath(__dirname, '../../angular-playground/dist/build/src/shared/sandboxes.js');

program
    .name('check-errors-plugin')
    .version('1.0.0')
    .option('--port', 'angular-playground port', 4201)
    .option('--random-scenario', 'Pick a random scenario for each sandbox')
    .option('--timeout', 'Timeout interval', 90)
    .option('--report-type', 'Type of output report', REPORT_TYPE.LOG)
    .option('--report-path', 'File path for report output')
    .parse(process.argv);

copyFileSync(SANDBOXES_PATH, './node_modules/check-sandboxes-plugin/sandboxes.js');
removeDynamicImports('./node_modules/check-sandboxes-plugin/sandboxes.js');
verifySandboxes(program);
