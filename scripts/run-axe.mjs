import { execSync } from 'child_process';
import { accessibilityUrls } from './accessibility-urls.mjs';

let hasErrors = false;

for (const url of accessibilityUrls) {
  try {
    execSync(`axe ${url} --exit`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Axe failed for ${url}`);
    hasErrors = true;
  }
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log('All axe tests passed.');
}