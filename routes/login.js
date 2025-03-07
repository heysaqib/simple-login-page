var express = require('express');
var router = express.Router();

const credential = {
    email: "admin@gmail.com",
    password: "admin123"
}

//login user
router.post('/',(req,res)=>{
    if(req.body.email != credential.email) {
        res.end("Invalid Username");
    }
    else if(req.body.password != credential.password) {
        res.end("Invalid Password");
    }
    else {
        //res.end("Login Successful");
        res.redirect('/dashboard');
    }
});

//login route
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user: req.session.user})
    }
    else{
        res.send("Unauthorised User");
    }
})


module.exports = router;