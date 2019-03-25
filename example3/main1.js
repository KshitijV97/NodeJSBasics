// More examples of URL Module
var url = require('url');
var http = require('http');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns /default.htm
console.log(q.search); // returns ?year=2017&month=february
console.log(q.query); // Returns object [Object: null prototype] { year: '2017', month: 'february' }
console.log(q.query.month); // Returns february

/**
 * Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
 */