const express = require('express');
const router = express.Router();
const {
  blogs_index,
  blog_detail,
  blog_create_get,
  blog_create_post,
  blog_delete,
} = require('../controllers/blogController');

router.get('/', blogs_index);

router.get('/create', blog_create_get);

router.post('/', blog_create_post);

router.get('/:id', blog_detail);

router.delete('/:id', blog_delete);

module.exports = router;
