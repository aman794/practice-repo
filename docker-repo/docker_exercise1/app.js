const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is working bro!!\nCalculated values: 1, 4, 9, 16, 25');
});

// Listen on port 3000 and bind to 0.0.0.0 so Docker can see it
server.listen(3000, '0.0.0.0', () => {
  console.log('Server running...');
});