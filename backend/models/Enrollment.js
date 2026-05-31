const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true },
    plan: {
      type: String,
      enum: ['self-paced', 'cohort', 'enterprise'],
      required: true,
    },
    city: { type: String },
    experience: {
      type: String,
      enum: ['student', 'junior', 'mid', 'senior'],
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending',
    },
    paymentStatus: {
      type: String,
      enum: ['unpaid', 'paid', 'refunded'],
      default: 'unpaid',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Enrollment', enrollmentSchema);
