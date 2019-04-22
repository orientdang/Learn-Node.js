const fs = require('fs');
const zlib = require('zlib');
const glib = zlib.createGzip();
const readStream = fs.createReadStream('./exam.txt');
const writeStream = fs.createWriteStream('./exam3.txt.gz', 'utf8');
readStream.on('data', (chunk) => {
    console.log(`${chunk}`);        
});

readStream.pipe(glib).pipe(writeStream);
