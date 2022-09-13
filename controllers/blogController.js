const Blog = require('../models/blogs');

const blogs_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render('index', { blogs });
    })
    .catch((err) => console.log(err));
};

const blog_detail = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => res.render('details', { blog }))
    .catch((err) => res.status(404).render('404'));
};

const blog_create_get = (req, res) => {
  res.render('create');
};

const blog_create_post = (req, res) => {
  blog = new Blog(req.body);

  blog
    .save()
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blogs_index,
  blog_detail,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
