#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';

const NOT_CLIENT_PROJECT = new Set([
  'simple-module',
]);

function getWebPath(dirPath, dirEnt) {
  if (dirEnt.name.startsWith('.')) {
    return null;
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
    const serverPath = path.join(dirPath, dirEnt.name, 'server');
    if (fs.existsSync(serverPath)) {
      return null;
    }

    const packageJsonPath = path.join(dirPath, dirEnt.name, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const webPath = dirEnt.name + '/build/index.html';
      const localPath = path.join(dirPath, webPath);
      if (!fs.existsSync(localPath)) {
        // - Package directory does not contain built client-side content
        // - Note: If there is both a server and client content, the
        //   subdirectory is called site/ and not build/. The previous `if`
        //   also catches such cases.
        return null;
      }
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

function main() {
  const args = process.argv.slice(2);
  const repoPath = args[0] ?? process.cwd();

  listHtmlFiles('tools', 'Run tools online');
  listHtmlFiles('html', 'Visit the HTML pages online');
  {
    console.log();
    console.log('## Run the client-side projects online');
    console.log();
    const projectsPath = path.join(repoPath, 'projects');
    for (const dirEnt of fs.readdirSync(projectsPath, { withFileTypes: true })) {
      const webPath = getWebPath(projectsPath, dirEnt);
      if (webPath === null) continue;
      const url = 'https://rauschma.github.io/learning-web-dev-code/projects/' + webPath;
      console.log(
        `* [▲${webPath}▲](${url})`.replaceAll('▲', '`')
      );
    }
  }

  function listHtmlFiles(dirName, heading) {
    console.log();
    console.log('## ' + heading);
    console.log();
    const projectsPath = path.join(repoPath, dirName);
    for (const dirEnt of fs.readdirSync(projectsPath, { withFileTypes: true })) {
      if (!dirEnt.name.endsWith('.html')) continue;

      const url = `https://rauschma.github.io/learning-web-dev-code/${dirName}/${dirEnt.name}`;
      console.log(
        `* [▲${dirEnt.name}▲](${url})`.replaceAll('▲', '`')
      );
    }
  }
}

main();