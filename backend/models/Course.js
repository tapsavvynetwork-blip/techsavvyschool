const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    level: {
      type: String,
      enum: ['Beginner-friendly', 'Practical', 'Advanced', 'Engineering', 'Capstone'],
      required: true,
    },
    modules: { type: Number, required: true },
    tags: [{ type: String }],
    isCapstone: { type: Boolean, default: false },
    duration: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
