/**
 * Create a Node.js file that opens the requested file and returns the content to the client. 
 * If anything goes wrong, throw a 404 error:
 */

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var file_name = "." + q.pathname;

    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-type': 'text/html' });
            return res.end(' 404 Not found');
        }

        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(data);

        return res.end();
    });
}).listen(8080);