const Anton = require("../models/Anton");

module.exports = async (req, res, next) => {
  try {
    const atn_number = req.params.atn_number;

    // Check if Anton with the given atn_number exists
    const anton = await Anton.findOne({ atn_number });

    if (!anton) {
      return res.status(404).json({ error: "Anton not found" });
    }

    // If Anton exists, attach it to the request object for further processing
    req.anton = anton;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
