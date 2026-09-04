#!/usr/bin/env node
// Minimal ESLint flat-config runner for eslint-config-next
import { ESLint } from 'eslint';

const eslint = new ESLint({
  overrideConfigFile: './eslint.config.mjs',
  fix: false,
  warnIgnored: false,
  cache: true,
});

const files = [
  'src',
];

const results = await eslint.lintFiles(files);

const formatter = await eslint.loadFormatter('stylish');
const resultText = formatter.format(results);
console.log(resultText);

const errorCount = results.reduce((a, r) => a + r.errorCount, 0);
const warningCount = results.reduce((a, r) => a + r.warningCount, 0);
console.log(`Errors: ${errorCount}, Warnings: ${warningCount}`);

import { writeFileSync } from 'fs';
writeFileSync('/opt/data/projects/webdev/zs-hermanice/scripts/lint-results.txt', resultText);

process.exit(errorCount > 0 ? 1 : 0);
