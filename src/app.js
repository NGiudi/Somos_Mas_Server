const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config();

// locals configurations.
const logger = require('./utils/logger');

// require routes.
const activitiesRoutes = require('./routes/activitiesRoutes');
const loginRoutes = require('./routes/loginRoutes');
const homeRoutes = require('./routes/homeRoutes');
const indexRoute = require('./routes/indexRoute');

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes in use.
app.use('/', indexRoute);
app.use('/home', homeRoutes);
app.use('/activities', activitiesRoutes);
app.use('/auth', loginRoutes);

// init listen server in asigned port.
const port = process.env.PORT || 3000;

app.listen ( port, () => {
    logger.info (`Server runing in port ${port}...`);
});