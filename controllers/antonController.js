const Anton = require("../models/Anton");


// Creating Anton
exports.createAnton = async (req, res) => {
  const anton = new Anton(req.body);

  try {
    await anton.save();
    res.status(201).json(anton); 
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

// Updating Anton
exports.updateAnton = async (req, res) => {

  const updates = Object.keys(req.body);
  const allowedUpdates = ["full_name", "email", "date_of_birth", "atn_number", "profile_image"];

  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).json({ error: "Invalid updates!" });
  }

  try {
    const anton = req.anton;
    updates.forEach((update) => (anton[update] = req.body[update]));
    await anton.save();
    res.json(anton);
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
};

// Deleting Anton
exports.deleteAnton = async (req, res) => {

  try {
    const anton = req.anton;
    await anton.deleteOne();
    res.json(anton);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
};

// Getting All Anton
exports.getAllAntons = async (req, res) => {
 
  try {
    const antons = await Anton.find();
    res.json(antons);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
};

// Getting a Single Anton
exports.getAntonByAtnNumber = async (req, res) => {
 
  try {
    const anton = req.anton;
    res.json(anton);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
};


