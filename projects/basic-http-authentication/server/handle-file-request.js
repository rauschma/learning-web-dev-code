import { existsSync } from 'node:fs';
import * as fs from 'node:fs/promises';
import * as path from 'node:path/posix';
import { insertVars } from './string-tools.js';

// Sibling of parent directory of this module
const SITE_DIR = new URL('../site', import.meta.url);

const extensionToContentType = new Map([
  ['.js', 'text/javascript'],
  ['.html', 'text/html'],
  ['.jpg', 'image/jpeg'],
]);

export const handleFileRequest = async (request, response, vars) => {
  // Remove search parameters etc.
  let absPath = new URL('file:' + request.url).pathname;
  if (absPath === '/') {
    absPath = '/index.html';
  }

  const fileUrl = new URL(SITE_DIR + absPath);
  if (existsSync(fileUrl)) {
    response.statusCode = 200; // OK

    // Allow both uppercase and lowercase filename extensions
    const ext = path.extname(absPath).toLowerCase();
    const contentType = extensionToContentType.get(ext) ?? 'text/plain';
    response.setHeader('Content-Type', contentType);

    if (contentType === 'text/html') {
      let content = await fs.readFile(fileUrl, 'utf-8');
      content = insertVars(vars, content);
      response.end(content);
      return;
    }
    const content = await fs.readFile(fileUrl); // binary
    response.end(content);
    return;
  }

  response.statusCode = 404; // Not Found
  response.setHeader('Content-Type', 'text/plain');
  const content = [
    'File not found: ' + request.url
  ];
  response.end(content.join('\n'));
};
