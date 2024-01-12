module.exports = (req, res, next) => {
  const { full_name, email, date_of_birth, atn_number } = req.body;

  // Check if all required fields are present
  if (!full_name || !email || !date_of_birth || !atn_number) {
    return res.status(400).json({ error: "All fields are required" });
  }

  next();
};
