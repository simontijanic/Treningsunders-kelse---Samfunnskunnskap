const Token = require("../models/tokenModel");
const Survey = require("../models/surveyModel");
exports.getIndex = (req, res) => {
  res.render("index", {
    error: req.flash("error"),
    success: req.flash("success"),
  });
};

exports.getLogin = (req, res) => {
  res.render("login", {
    error: req.flash("error"),
  });
};

exports.getSurvery = async (req, res) => {
  try {
    const surveys = await Survey.find(); // Fetch all survey data
    res.render("surveyData", {
      error: req.flash("error"),
      success: req.flash("success"),
      surveys: JSON.stringify(surveys), // Pass the data as a JSON string
    });
  } catch (error) {
    console.error("Error fetching surveys:", error);
    res.status(500).json({ message: "Failed to fetch surveys" });
  }
};

exports.postSurvey = async (req, res) => {
  try {
    const surveyData = req.body;
    if (!surveyData) {
      console.error("No survey data!");
      return res.redirect("/survey");
    }

    if (req.session.admin) {
      return res
        .status(200)
        .json({ message: "Survey saved successfully!", redirect: "/" });
    }

    const token = req.session.user.token; 

    if (!token) {
      console.error("No token provided!");
      return res.redirect("/survey");
    }

    const survey = new Survey(surveyData);
    await survey.save();

    await Token.findOneAndDelete({ token: token });
    req.session.user = null;

    res
      .status(200)
      .json({ message: "Survey saved successfully!", redirect: "/" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save survey" });
  }
};

exports.postLogin = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      req.flash("error", "Please enter a token");
      return res.redirect("/login");
    }

    const processedToken = token.toUpperCase().trim();

    const tokenDoc = await Token.findOne({
      token: processedToken,
    });

    if (!tokenDoc) {
      req.flash("error", "Invalid token. Please check and try again.");
      return res.redirect("/login");
    }

    if (tokenDoc.used) {
      req.flash(
        "error",
        "This token has already been used. Please request a new one."
      );
      return res.redirect("/login");
    }

    tokenDoc.used = true;
    await tokenDoc.save();

    req.session.user = { token: tokenDoc.token };

    req.flash("success", "Login successful!");
    res.redirect("/");
  } catch (error) {
    console.error("Login error:", error);
    req.flash("error", "An unexpected error occurred. Please try again.");
    res.redirect("/login");
  }
};
