const Token = require("../models/tokenModel");
const Admin = require("../models/adminModel");
const crypto = require("crypto");

function generateShortToken(length = 6) {
  const buffer = crypto.randomBytes(Math.ceil(length / 2));

  const token = buffer
    .toString("hex")
    .slice(0, length)
    .toUpperCase()
    .replace(/O/g, "0") // Replace O with 0 to avoid confusion
    .replace(/I/g, "1"); // Replace I with 1 to avoid confusion

  return token;
}

exports.generateToken = async (req, res) => {
  try {
    const tokenCount = await Token.countDocuments();

    if (tokenCount >= 15) {
      req.flash(
        "error",
        "Maximum token limit (15) reached. Cannot generate more tokens."
      );
      return res.redirect("/admin/dashboard");
    }

    let token;
    let existingToken;

    do {
      token = generateShortToken();
      existingToken = await Token.findOne({ token });
    } while (existingToken);

    const newToken = new Token({
      token,
      createdAt: new Date(),
      used: false,
    });
    await newToken.save();

    //        req.flash('success', 'New token generated successfully.');
    return res.redirect("/admin/dashboard");
  } catch (error) {
    console.error("Token generation error:", error);
    req.flash("error", "Failed to generate token.");
    return res.redirect("/admin/dashboard");
  }
};

exports.getLogin = (req, res) => {
  res.render("adminLogin");
};

exports.getDashboard = async (req, res) => {
  const tokens = await Token.find();
  res.render("adminDashboard", { tokens });
};

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) {
    return res.redirect("/admin/login");
  }

  if (admin.password === password) {
    req.session.admin = {
      id: admin._id,
      username: admin.username,
    };

    return res.redirect("/admin/dashboard");
  } else {
    return res.redirect("/admin/dashboard");
  }
};

exports.logoutAdmin = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Logout error:", err);
     //   req.flash("error", "Failed to logout.");
        return res.redirect("/admin/dashboard");
      }

      res.clearCookie("connect.sid"); 

      res.redirect("/admin/login");
    });
  } catch (error) {
    console.error("Logout error:", error);
  //  req.flash("error", "Failed to logout.");
    res.redirect("/admin/dashboard");
  }
};
