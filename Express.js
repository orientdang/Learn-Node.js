const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Nguyen Hai Dang');
});
app.get('/exam', (req, res) => {
    res.send('Nguyen Hai Dang exam');
});
app.get('/exam/:name/:age', (req, res) => {
    const userParams = req.params;
    const query = req.query;
    // res.send(`Your name is: ${userParams.name} \n age ${userParams.age}`); 
    res.send(query.name);
});

app.listen('3000');
