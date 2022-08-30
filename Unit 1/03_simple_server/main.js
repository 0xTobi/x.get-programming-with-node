const port = 3000,
    http = require("http"),                             // Require the http and http-status-codes modules
    httpStatus = require("http-status-codes"),
    getJSONString = obj => {
        return JSON.stringify(obj, null, 2)
    },
    app = http.createServer((request, response) => {    // Creates the server with request and response parameters.
        console.log("Received an incoming request!");
        response.writeHead(httpStatus.OK, {             // Writes the head of the response. 
            "content-type": "text/html"
        });

        let responseMessage = "<h1>Hello, Universe!</h1>";
        response.write(responseMessage);                // Writes the body of the response
        response.end()                                  // Ends the response. Else the connection remains open and the client wont receive the response.
        console.log(`Sent a response : ${responseMessage}`);

        console.log(`METHOD: ${getJSONString(request.method)}`)
        console.log(`URL: ${getJSONString(request.url)}`)
        console.log(`HEADERS: ${getJSONString(request.headers)}`)
    });


app.listen(port)
console.log(`The server has started and is listening on port number: ${port}.`)