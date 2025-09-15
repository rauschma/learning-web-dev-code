import auth from 'http-auth';
import * as http from 'node:http';
import { handleFileRequest } from './handle-file-request.js';
import { isValidPassword, readPasswordsMap } from './password-tools.js';

const hostname = 'localhost';
const port = 3000;
const passwordsMap = await readPasswordsMap();

const basic = auth.basic(
  { realm: 'Users' },
  async (user, password, callback) => {
    const isValid = await isValidPassword(passwordsMap, user, password);
    callback(isValid);
  }
);

http
  .createServer(
    basic.check(
      async (request, response) => {
        await handleFileRequest(
          request, response,
          { user: request.user }
        );
      }
    )
  )
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  })
  ;
