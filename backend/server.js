const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

dbConnection = require('./dbConnection');
const router = require('./routes/router');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.json());

app.use('/router', router);

app.listen(PORT, () => {
        console.clear();
        console.log(`Server started on Port ${PORT}!!!`)
    }
)

