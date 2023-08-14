const path = require('path');
const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const { Project } = require('../models/');


// api routes
router.use('/api', apiRoutes);

// send the static index homepage file to client browser
// router.get('/', (req, res) => {
//   const indexPath = path.join(__dirname, '../public/index.html');
//   res.sendFile(indexPath);
// });

// send the static index homepage file to client browser
router.get('/login', (req, res) => {
  const indexPath = path.join(__dirname, '../public/login.html');
  res.sendFile(indexPath);
});

// render homepage via handlebars
router.use('/', homeRoutes);

// render recipebox page via handlebars
router.use('/recipebox', (req, res) => {
  res.render('recipebox');
});

module.exports = router;
