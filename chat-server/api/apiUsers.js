
const User = require("../models/User");
const secretKey = "aldi";
var jwt = require("jsonwebtoken");

module.exports = {
/* GET users listing. */

userLogin: async  (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user)
      return res.json({
        success: false,
        message: "Authentication failed. User not found.",
      });

    user.validatePassword(req.body.password, async function (err, match) {
      try {
        if (err || !match)
          return res.json({
            success: false,
            message: "Authentication failed. Wrong password.",
          });

        var token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          secretKey,
          { expiresIn: 60 * 60 }
        );

        // return the information including token as JSON
        const inputToken = await User.findByIdAndUpdate(user._id, {
          token: token,
        });

        res.status(201).json({
          data: {
            name: user.name,
            email: user.email
          },
          token: token
        });
      } catch (err) {
        res.status(500).json({ err });
      }
    });
  } catch (err) {
    res.status(500).json({ err });
  }
},

userRegister: async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    if (!user)
      return res.json({
        success: false,
        message: "Authentication failed. User not found.",
      });

    user.validatePassword(req.body.password, async function (err, match) {
      try {
        if (err || !match)
          return res.json({
            success: false,
            message: "Authentication failed. Wrong password.",
          });

        var token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          secretKey,
          { expiresIn: 60 * 60 }
        );

        // return the information including token as JSON
        const inputToken = await User.findByIdAndUpdate(user._id, {
          token: token,
        });

        res.status(201).json({
         data: {
          name: user.name,
           email: user.email
         },
          
          token: token,
        });
      } catch (err) {
        res.status(500).json({ err });
      }
    });
  } catch (err) {
    res.status(500).json({ err });
  }
},


userRead: async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(201).json({
      success: false,
      message: "something wrong",
      err,
    });
  }
},

userDelete: async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.status(201).json({
      success: true,
      message: "user have been deleted",
      user,
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: "something wrong",
      err,
    });
  }
},

}
