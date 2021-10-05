const express = require('express')
const app = express();

//security, performance, edge cases
// CRUD -> POST, GET, PUT, DELETE
const slash = (req, res) => {
    res.send("Hello")
}
app.get('/', slash)

app.listen(5000);
