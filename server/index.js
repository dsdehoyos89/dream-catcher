require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})