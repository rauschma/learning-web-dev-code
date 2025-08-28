#!/usr/bin/env node

import * as fs from 'node:fs';

const dirPath = process.argv[2];
for (const dirEnt of fs.readdirSync(dirPath, { withFileTypes: true })) {
  let relPath;
  if (dirEnt.isDirectory()) {
    relPath = dirEnt.name + '/' + dirEnt.name + '.html'
  } else {
    relPath = dirEnt.name;
  }
  const url = 'https://rauschma.github.io/learning-web-dev-code/projects/' + relPath;
  console.log(
    `* [▲${relPath}▲](${url})`.replaceAll('▲', '`')
  );
}