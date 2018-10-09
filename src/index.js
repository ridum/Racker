const express = require('express');
const fetcher = require('./stock_fetcher');
const app = express();
const port = 3000;



app.get('/', handler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

async function handler(req, res) {
    console.log("gethere!");
    let data = await fetcher.getSample();
    console.log(data);
    res.send(data);
}