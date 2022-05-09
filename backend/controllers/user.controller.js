const User = require("./../models/User");
const bcrypt = require("bcrypt");
const { validateEmail, validateUsername } = require("./../helpers/validation");
exports.userRegister = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      username,
      birthYear,
      birthMonth,
      birthDay,
      gender,
      password,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "invalid email" });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.status(400).json({
        message:
          "This email is already in use, please try again with a different email",
      });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const validatedUsername = await validateUsername(username);
    const user = await new User({
      first_name,
      last_name,
      email,
      username: validatedUsername,
      birthYear,
      birthMonth,
      birthDay,
      gender,
      password: cryptedPassword,
    }).save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
