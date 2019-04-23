const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();
console.log(jsonParser);
// parse application/json
app.use(bodyParser.text())


app.post('/user', (req, res) => {
    console.log(typeof req.body);
    console.log(req);
    res.send('success');
})

app.listen('3000');