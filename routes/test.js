const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'NodeJS Code'

router.get('/test', function(req, res, next) {
  res.send({
    name: 'test',
    server: 'express',
    variableData: variableData
  });
});

module.exports = router;