#!/usr/bin/env zx

const htmlSuccess = await $`./devScripts/validateHtml.mjs`;
console.log(htmlSuccess.stdout);
const cssSuccess = await $`./devScripts/validateCss.mjs`;
console.log(cssSuccess.stdout);

process.exit(0);
