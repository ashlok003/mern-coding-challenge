
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Initialize Database
router.get('/init', transactionController.initializeDatabase);

// List Transactions
router.get('/transactions', transactionController.listTransactions);

// Statistics
router.get('/statistics', transactionController.getStatistics);

// Bar Chart Data
router.get('/barchart', transactionController.getBarChart);

// Pie Chart Data
router.get('/piechart', transactionController.getPieChart);

// Combined API
router.get('/combined', transactionController.getCombinedData);

module.exports = router;
