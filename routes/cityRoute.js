// routes/cityRoutes.js
const express = require('express');
const router = express.Router();
const cityController = require('../controller/Citycontroller');

router.get('/cities/:stateId', cityController.getCities);
router.get('/cities', cityController.getAllCities);

module.exports = router;
