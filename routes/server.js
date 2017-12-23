
/*
 * GET home page.
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + "reveived.");
		route(handle, pathname, response, request);

	}

	http.createServer(onRequest).listen(3333);
	console.log("Server has started.");
}

exports.start = start;
