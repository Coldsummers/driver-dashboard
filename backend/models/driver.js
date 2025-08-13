const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  truckType: { type: String, required: true },
  profilePic: { type: String, required: true }, // Add this
  document: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Driver', driverSchema);