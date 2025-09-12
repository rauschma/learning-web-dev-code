import { createServer } from 'node:http';

const hostname = 'localhost';
const port = 3000;

const server = createServer(
  (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    const content = [
      '<!DOCTYPE html>',
      '<meta charset="UTF-8">',
      '<title>Simple Web Server</title>',
      `Path: ${request.url}`
    ];
    response.end(content.join('\n'));
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
