var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-type": 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + "" + q.month; // Send request like this http://localhost:8080/?year=2017&month=July
    res.end(txt);
}).listen(8080);

/**
 * Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
 * 
 */

/**
 * The http.createServer() method turns your computer into an HTTP server.
 * The http.createServer() method creates an HTTP Server object.
 * The HTTP Server object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.
 * 
 * http.createServer(requestListener);
 * 
 * requestListener Specifies a function to be executed every time the server gets a request. This function is called a requestListener, and handles request from the user, as well as response back to the user.
 * 
 * listen() Makes the server listen to ports on the computer
 * 
 * The server.listen() method creates a listener on the specified port or path.
 */