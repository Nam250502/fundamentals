const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'fundamentals'

router.get('/', function(req, res, next) {
  res.send({
    name: 'fundamentals',
    server: 'express',
    variableData: variableData
  });
});

module.exports = router;
