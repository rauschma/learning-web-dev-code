#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';

const NOT_CLIENT_PROJECT = new Set([
  'simple-module',
]);

function getPaths(dirEnt) {
  if (NOT_CLIENT_PROJECT.has(dirEnt.name)) {
    return null;
  }

  if (dirEnt.isFile()) {
    if (dirEnt.name.endsWith('.html')) {
      return dirEnt.name;
    }
    if (dirEnt.name.endsWith('.js')) {
      // .js files (Node.js scripts) can’t be run in browsers
      return null;
    }
    throw new Error('Unsupported filename extension: ' + dirEnt.name);
  }
  if (!dirEnt.isDirectory()) {
    throw new Error('Neither file nor directory: ' + dirEnt.name);
  }
  {
    const relPath = dirEnt.name + '/' + dirEnt.name + '.html'
    const localPath = path.join(dirPath, relPath);
    if (fs.existsSync(localPath)) {
      return relPath;
    }
  }
  {
    const relPath = dirEnt.name + '/' + dirEnt.name + '.js'
    const localPath = path.join(dirPath, relPath);
    if (fs.existsSync(localPath)) {
      // .js files (Node.js scripts) can’t be run in browsers
      return null;
    }
  }
  throw new Error('Directory does not have a suitable .html or .js file: ' + dirEnt.name);
}

const dirPath = process.argv[2];
for (const dirEnt of fs.readdirSync(dirPath, { withFileTypes: true })) {
  const relPath = getPaths(dirEnt);
  if (relPath === null) continue;
  const url = 'https://rauschma.github.io/learning-web-dev-code/projects/' + relPath;
  console.log(
    `* [▲${relPath}▲](${url})`.replaceAll('▲', '`')
  );
}