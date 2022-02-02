require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connection = require('./db-config');
const SERVER_PORT = process.env.SERVER_PORT;
const errorHandler = require('./middlewares/errors/error-handler');

const app = express();

// connexion
connection.connect((err) => {
  if (err) {
    console.error(`error connecting:  + ${err.stack}`);
  } else {
    console.log(`connected as id ${connection.threadId}`);
  }
});

// pre-route middlewares
app.use(cors({origin: process.env.FRONTEND_URL}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require('./routes')(app);

// server setup
const server = app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});

// errors setup
app.use(errorHandler);

module.exports = server;
