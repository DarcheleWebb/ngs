const http = require('http');

const requestListener = (req, res) => {
  console.log('Request Object');
  console.dir(req, {depth: 0});
  console.log(`URL: ${req.url}`);
  console.log('Response Object');
  console.dir(res, {depth: 0});
  res.write('Hello World - Updated\n');
  res.end();
}

const server = http.createServer();
server.on('request', requestListener);


server.listen(4242, () => {
  console.log('Server is running...');
});
