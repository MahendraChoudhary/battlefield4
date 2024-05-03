const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config();

dbConnection = require('./dbConnection');
const router = require('./routes/router');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    // credentials: true
}))

app.use('/router', router);

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
})

app.listen(PORT, () => {
        console.clear();
        console.log(`Server started on Port ${PORT}!!!`)
    }
)

