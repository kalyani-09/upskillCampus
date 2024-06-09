const express = require('express');
const router = express.Router();
const monitorController = require('../controllers/monitorController');

router.post('/monitor', monitorController.createMonitorData);
router.get('/monitor', monitorController.getAllMonitorData);

module.exports = router;
