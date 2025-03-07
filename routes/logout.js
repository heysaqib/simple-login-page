const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
            res.send("Error");
        }
        else {
            res.render('index', { title: 'Login System', logout: 'Logged out successfully!' });
        }
    });
});

module.exports = router;