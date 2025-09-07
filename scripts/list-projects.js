#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';

const NOT_CLIENT_PROJECT = new Set([
  'simple-module',
]);

function getWebPath(dirPath, dirEnt) {
  function webPathMustExist(webPath) {
    const localPath = path.join(dirPath, webPath);
    if (!fs.existsSync(localPath)) {
      throw new Error(
        `Could not find web path ${webPath} in directory ${dirPath}`
      );
    }
  }

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
  } else if (dirEnt.isDirectory()) {
    const packageJsonPath = path.join(dirPath, dirEnt.name, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const webPath = dirEnt.name + '/build/index.html';
      webPathMustExist(webPath);
      return webPath;
    }

    const jsWebPath = dirEnt.name + '/' + dirEnt.name + '.js';
    if (fs.existsSync(path.join(dirPath, jsWebPath))) {
      // .js files (Node.js scripts) can’t be run in browsers
      return null;
    }

    const htmlWebPath = dirEnt.name + '/' + dirEnt.name + '.html';
    if (fs.existsSync(path.join(dirPath, htmlWebPath))) {
      return htmlWebPath;
    }

    throw new Error('Directory does not have a suitable .html or .js file: ' + dirEnt.name);
  } else {
    throw new Error('Neither file nor directory: ' + dirEnt.name);
  }
}

const dirPath = process.argv[2];
for (const dirEnt of fs.readdirSync(dirPath, { withFileTypes: true })) {
  const webPath = getWebPath(dirPath, dirEnt);
  if (webPath === null) continue;
  const url = 'https://rauschma.github.io/learning-web-dev-code/projects/' + webPath;
  console.log(
    `* [▲${webPath}▲](${url})`.replaceAll('▲', '`')
  );
}