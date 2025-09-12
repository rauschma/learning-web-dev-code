import { createServer } from 'node:http';
import { API_PATH_PREFIX, handleApiRequest } from './handle-api-request.js';
import { handleFileRequest } from './handle-file-request.js';

const hostname = 'localhost';
const port = 3000;

const server = createServer(
  async (request, response) => {
    const webPath = request.url;
    console.log('Request: '+ webPath);
    if (webPath.startsWith(API_PATH_PREFIX)) {
      await handleApiRequest(request, response);
      return;
    }
    await handleFileRequest(request, response);
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
