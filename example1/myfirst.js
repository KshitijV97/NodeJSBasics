var http = require('http');

//We use ./ to locate the module, that means that the module is located in the same folder as the Node.js file
var dt = require('./myfirstmodule');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('The current date and time are ' + dt.myDateTime());
    res.end();
}).listen(8080);

// Open browser and check localhost:8080