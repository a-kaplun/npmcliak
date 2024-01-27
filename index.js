#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine: `Hi, nice to meet you...`,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
  description: pkgJSON.description,
  version: pkgJSON.version,
});

console.log(`
Baba

Baba learning Node.js 1
`);
