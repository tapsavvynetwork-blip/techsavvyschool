const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    order: { type: Number, default: 0 },
    category: { type: String, default: 'general' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FAQ', faqSchema);
