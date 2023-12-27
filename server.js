const express = require("express");
const app = express();

const port = 3333;

app.use(express.static(__dirname));

// https://expressjs.com/en/4x/api.html#req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'client.html');
});

app.post('/comment', (req, res) => {
    console.log(req.body);
    res.status(200).sendFile(__dirname + '/' + 'success.html');
});



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});