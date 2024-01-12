module.exports = (req, res, next) => {
  const { full_name, email, date_of_birth, atn_number } = req.body;

  // Check if all required fields are present
  if (!full_name || !email || !date_of_birth || !atn_number) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if email is valid
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Check if date_of_birth is a valid date
  if (!isValidDate(date_of_birth)) {
    return res.status(400).json({ error: "Invalid date_of_birth format" });
  }

  next();
};

// Function to validate email format
function isValidEmail(email) {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate date format
function isValidDate(date) {
  return !isNaN(Date.parse(date));
}
