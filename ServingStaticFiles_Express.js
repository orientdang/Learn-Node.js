const express = require('express');
const path = require('path');
const app = express();

app.use('/publib', express.static(path.join(__dirname, 'Files')));

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname,'Files','index.html'));
    console.log(path.join(__dirname,'Files','index.html'));
});


app.listen('3000');