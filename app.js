const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const blogRoutes = require('./routes/blog.routes');
const navRoutes = require('./routes/nav.routes');

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(3000, () => console.log('Server started on port 3000'))
  )
  .catch((err) => console.log(err));

//register viewe engine
app.set('view engine', 'ejs');

//MIDLEWEAR & STATIC FILES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//nav routes
app.use(navRoutes);

//Blofg routes
app.use('/blogs', blogRoutes);

//404 - need to be in bottom
app.use((req, res) => {
  res.status(404).render('404');
});
