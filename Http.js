const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello from Dang');
        res.end();
    } else {
        res.write('Wrong domain');
        res.end();
    }
})

server.listen('3000');