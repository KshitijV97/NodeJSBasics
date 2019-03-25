var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(req.url); // Return the URL part of the Request Object
    res.end();
}).listen(8080);

/**
 * Add an HTTP Header
 * If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
 * 200 means that all is OK
 * The second argument is an object containing the response headers.
 */

/**
 * Read the Query String
 */

 /**
  * How to run?
  * 
  * Just enter text after localhost:8080 while sending request from browser and it will be thrown on Screen
  */
