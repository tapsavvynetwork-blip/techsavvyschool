const Enrollment = require('../models/Enrollment');

// POST enroll a student
exports.createEnrollment = async (req, res) => {
  try {
    const existing = await Enrollment.findOne({ email: req.body.email, plan: req.body.plan });
    if (existing) {
      return res.status(409).json({ success: false, message: 'Already enrolled in this plan' });
    }
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json({ success: true, data: enrollment });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET all enrollments (admin)
exports.getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.json({ success: true, count: enrollments.length, data: enrollments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PATCH update enrollment status
exports.updateEnrollmentStatus = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, paymentStatus: req.body.paymentStatus },
      { new: true }
    );
    if (!enrollment) return res.status(404).json({ success: false, message: 'Enrollment not found' });
    res.json({ success: true, data: enrollment });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
