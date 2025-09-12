import { createServer } from 'node:http';

const hostname = 'localhost';
const port = 3000;

const server = createServer(
  (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    const searchParams = new URL('file:' + request.url).searchParams;
    const content = [
      'Number of search parameters: ' + Array.from(searchParams.entries()).length
    ];
    for (const [key, value] of searchParams.entries()) {
      content.push(
        key + '=' + value
      );
    }
    response.end(content.join('\n'));
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
