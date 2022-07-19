const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      console.log("user already exist");
      return;
    }
    const newUser = new User({
      email: email,
      password: password,
      name: name,
    });
    await newUser.save();
    return res.status(200).json({
      message: "User successfully created",
    });
  } catch (error) {
    console.log(error);
  }
};

User.find({}).then((data) => console.log(data));
