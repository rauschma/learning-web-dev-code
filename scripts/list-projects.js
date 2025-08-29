#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';

const NOT_CLIENT_PROJECT = new Set([
  'simple-module',
]);

const dirPath = process.argv[2];
for (const dirEnt of fs.readdirSync(dirPath, { withFileTypes: true })) {
  if (dirEnt.name.endsWith('.js')) {
    // Can’t be run in the browser
    continue;
  }
  if (NOT_CLIENT_PROJECT.has(dirEnt.name)) {
    continue;
  }

  let relPath;
  if (dirEnt.isDirectory()) {
    relPath = dirEnt.name + '/' + dirEnt.name + '.html'
  } else {
    relPath = dirEnt.name;
  }

  const localPath = path.join(dirPath, relPath);
  if (!fs.existsSync(localPath)) {
    throw new Error('Could not find: ' + localPath);
  }

  const url = 'https://rauschma.github.io/learning-web-dev-code/projects/' + relPath;
  console.log(
    `* [▲${relPath}▲](${url})`.replaceAll('▲', '`')
  );
}