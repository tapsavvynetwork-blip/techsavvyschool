const FAQ = require('../models/FAQ');

exports.getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ order: 1 });
    res.json({ success: true, data: faqs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createFAQ = async (req, res) => {
  try {
    const faq = await FAQ.create(req.body);
    res.status(201).json({ success: true, data: faq });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
