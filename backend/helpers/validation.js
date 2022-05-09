const User = require("./../models/User");
exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,12})([\.\a-z]{2,12})?$/);
};
exports.validateUsername = async (username) => {
  let a = false;
  do {
    let checkUsername = await User.findOne({ username });
    if (checkUsername) {
      //change username
      username = `${username}${(new Date() * Math.random())
        .toString()
        .substring(0, 3)}`;
      a = true;
    } else {
      a = false;
    }
  } while (a);
  return username;
};
