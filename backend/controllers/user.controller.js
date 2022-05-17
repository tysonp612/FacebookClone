const User = require("./../models/User");
const bcrypt = require("bcrypt");
const { validateEmail, validateUsername } = require("./../helpers/validation");
const { generateToken } = require("./../helpers/tokens");
const { sendVerificationEmail } = require("./../helpers/mailer");
const jwt = require("jsonwebtoken");

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
      return res.status(400).json({ message: "Invalid email" });
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
    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}}`;
    sendVerificationEmail(user.email, user.first_name, url);
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.status(200).json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token,
      verified: user.verified,
      message: "Register Success, please activate your email to start",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.activateAccount = async (req, res) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const checkUser = await User.findById(user.id);
    if (checkUser.verified === true) {
      return res
        .status(400)
        .json({ message: "This email is already activated" });
    } else {
      await User.findByIdAndUpdate(user.id, { verified: true });
      return res
        .status(200)
        .json({ message: "Account is activated successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.loginAccount = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("No account found with this email");
    }
    checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json("Invalid credentials, please try again");
    }
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.status(200).json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token,
      verified: user.verified,
      message: "Register Success, please activate your email to start",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
