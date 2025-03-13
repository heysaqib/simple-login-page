const express = require("express");
const router = express.Router();

const users = { admin: "password123" }; // Hardcoded user data

// Login Page
router.get("/login", (req, res) => {
    res.set("Cache-Control", "no-store");
    res.render("login", { error: null });
});

// Handle Login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        req.session.user = username;
        req.session.cookie.maxAge = 10 * 60 * 1000; // Reset session expiry on login
        return res.redirect("/dashboard");
    } else {
        return res.render("login", { error: "Invalid username or password" });
    }
});

// Logout
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.redirect("/auth/login");
    });
});

module.exports = router;
