const fs = require('fs');

let readStream = fs.createReadStream('./exam.txt');
readStream.on('data', (data) => {
    console.log(data.toString());
})