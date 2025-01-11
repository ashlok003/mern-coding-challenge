
const axios = require('axios');
const Transaction = require('../models/Transaction');

// Initialize Database
exports.initializeDatabase = async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;

    await Transaction.deleteMany();
    await Transaction.insertMany(transactions);

    res.status(200).json({ message: 'Database initialized successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List Transactions
exports.listTransactions = async (req, res) => {
  const { search, page = 1, perPage = 10 } = req.query;
  const query = {};

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { price: { $regex: search, $options: 'i' } },
    ];
  }

  try {
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));
    const total = await Transaction.countDocuments(query);

    res.status(200).json({ transactions, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Statistics
exports.getStatistics = async (req, res) => {
  const { month } = req.query;
  const startDate = new Date(`${month}-01`);
  const endDate = new Date(startDate);
  endDate.setMonth(startDate.getMonth() + 1);

  try {
    const totalSale = await Transaction.aggregate([
      { $match: { dateOfSale: { $gte: startDate, $lt: endDate } } },
      { $group: { _id: null, totalAmount: { $sum: '$price' }, totalSoldItems: { $sum: 1 }, totalUnsoldItems: { $sum: { $cond: ['$sold', 0, 1] } } } },
    ]);

    res.status(200).json(totalSale[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
