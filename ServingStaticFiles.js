const http = require('http');
const fs = require('fs');
const readStream = fs.createReadStream('./files/person.json');
// const writeStream = fs.createWriteStream('./files/exam_static.txt','utf8');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200,{
            headers: {
                'content-type': 'application/json'
            }
        })
        readStream.pipe(res);
        console.log(res);
    }
});

server.listen('3000');