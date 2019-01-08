const http = require('http')
const port = 3000
http.createServer((request, response) => {
    response.writeHead(404, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    })
    response.statusCode = 200
    response.write('Hello')
    response.end(' World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)