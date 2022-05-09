const User = require("./../models/User");
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
    const user = await new User({
      first_name,
      last_name,
      email,
      username,
      birthYear,
      birthMonth,
      birthDay,
      gender,
      password,
    }).save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
