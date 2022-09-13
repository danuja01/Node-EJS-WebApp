const index = (req, res) => {
  res.redirect('/blogs');
};

const about = (req, res) => {
  res.render('about');
};

module.exports = { index, about };
