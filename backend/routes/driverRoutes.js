const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

// Register a new driver
router.post('/', driverController.registerDriver);

// Get a driver by ID
router.get('/:id', driverController.getDriver);

// Get all drivers
router.get('/', driverController.getAllDrivers);

module.exports = router;