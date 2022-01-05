const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
//Load config
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// Logging
if ((process.env.NODE_ENV = 'development')) {
  app.use(morgan('dev'));
}

// Handlebars
app.engine(
  'handlebars',
  exphbs.engine({ defaultLayout: 'main', extname: '.hbs' })
);
app.set('view engine', '.hbs');
app.set('views', './views');

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
