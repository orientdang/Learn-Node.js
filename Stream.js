const fs = require('fs');

const readStream = fs.createReadStream('./exam.txt');
const writeStream = fs.createWriteStream('./exam2.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(`${chunk}`);
    writeStream.write(chunk);
});
