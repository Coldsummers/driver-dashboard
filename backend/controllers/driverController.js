const Driver = require('../models/driver');

exports.registerDriver = async (req, res) => {
  try {
    const { fullName, email, phone, truckType } = req.body;
    const profilePic = req.files?.profilePic?.[0]?.filename;
    const document = req.files?.document?.[0]?.filename;

    const driver = new Driver({
      fullName,
      email,
      phone,
      truckType,
      profilePic,
      document
    });

    await driver.save();
    res.status(201).json(driver);
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.getDriver = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) return res.status(404).json({ error: 'Driver not found' });
    res.json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};