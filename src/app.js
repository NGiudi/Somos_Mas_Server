const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config();

/* local configurations. */
const logger = require('./utils/logger');

/* require routes. */
const organizationsRoutes = require('./routes/organizationRoutes');
const activitiesRoutes = require('./routes/activitiesRoutes');
const aboutUsRoutes = require('./routes/aboutUsRoutes');
const loginRoutes = require('./routes/loginRoutes');
const homeRoutes = require('./routes/homeRoutes');
const indexRoute = require('./routes/indexRoute');
const newsRoutes = require('./routes/newsRoutes');

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* routes in use. */
app.use('/organizations', organizationsRoutes);
app.use('/activities', activitiesRoutes);
app.use('/about-us', aboutUsRoutes);
app.use('/auth', loginRoutes);
app.use('/news', newsRoutes);
app.use('/home', homeRoutes);
app.use('/', indexRoute);

/* init listen server in asigned port. */
const port = process.env.PORT || 3000;

app.listen ( port, () => {
    logger.info (`Server runing in port ${port}...`);
});