var express = require('express');
var router = express.Router();

// Middleware to check authentication
function isAuthenticated(req, res, next) {
  if (req.session.user) {
      return next();
  } else {
      res.redirect("/auth/login");
  }
}

// Home Route
router.get("/", (req, res) => {
  res.set("Cache-Control", "no-store"); // Prevent caching
  res.render("index", { user: req.session.user });
});

// Dashboard Route (Protected)
router.get("/dashboard", isAuthenticated, (req, res) => {
  res.set("Cache-Control", "no-store"); // Prevent back button access
  res.render("dashboard", { user: req.session.user });
});

module.exports = router;
