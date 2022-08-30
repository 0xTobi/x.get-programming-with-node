
//  HANDLES SIMPLE GET REQUESTS 

// const port = 3000, 
//     http = require("http"), 
//     httpStatus = require("http-status-codes"), 
//     app = http.createServer();
    
// app.on("request", (req, res) => {       // Notice here we didn't use the "req" parameter. That's because the request being made is a GET request, it doesn't send anything, it just requests for data from the server.
// 
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });
    
//     let responseMessage = "<h1>This will show on the screen.</h1>"; 
//     res.end(responseMessage);
// });

// app.listen(port);
// console.log(`The server has started and is listening on port ${port}`);





// // MODIFIED TO HANDLE POST REQUESTS.
// const port = 3000, 
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     app = http.createServer(),
//     getJSONString = obj => {
//         return JSON.stringify(obj, null, 2)
//     }

// app.on("request", (req, res) => {                       //Listens for incoming requests
//     var body = []                                       //Creates a new array to hold chunk datas
//     req.on("data", (bodyData) => {                      //Process it in another callback function   ||  The request object can also listen for events, just like the server(app.on)     ||      body.push(bodyData); - Adds received data to the body array        
//         body.push(bodyData);
//     });     
//     req.on("end", () => {                               //run this code when data transmission ends                  
//         body = Buffer.concat(body).toString();          //converts the body array to a string of text
//         console.log(`Request Body Contents: ${body}`)
//     })
//     console.log(`METHOD: ${getJSONString(req.method)}`)
//     console.log(`URL: ${getJSONString(req.url)}`)
//     console.log(`HEADERS: ${getJSONString(req.headers)}`)

//     res.writeHead(httpStatus.OK, {
//         "content-type" : "text/html"
//     })  

//     let responseMessage = "<h1>My Name is Tobi</h1>"
//     res.end(responseMessage)                            // Responds with a single line of HTML.
// });

// app.listen(port);
// console.log(`The server has started and is listening on port ${port}`)
 





const port = 3000, 
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http
        .createServer((req, res) => {
            res.writeHead(httpStatus.OK, {
                "Content-type": "text/html"
            })
            let responseMessage = "<h1>I am a Bad Guy</h1>"
            res.end(responseMessage);
        })
        .listen(port);
