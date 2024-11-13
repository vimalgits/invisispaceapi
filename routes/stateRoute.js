const express = require('express');
const router = express.Router();
const stateController = require('../controller/Statecontroller');

router.get('/states', stateController.getStates);

module.exports = router;
