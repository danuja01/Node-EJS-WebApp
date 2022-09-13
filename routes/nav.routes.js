const express = require('express');
const router = express.Router();

const { index, about } = require('../controllers/navController');

router.get('/', index);

router.get('/about', about);

module.exports = router;
