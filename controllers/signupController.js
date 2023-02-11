const SignUp = require("../models/signupModel")
const insertSignUp = async(req, res)=>{
    try{
        const signup = new SignUp({
            username: req.body.username,
            password: req.body.password
        })
        const result = await signup.save()
        // res.send("Registration Successful")
        res.render("profile", {
            username: req.body.username
        })
    }
    catch(err){
        res.send(err.message)
    }
}
module.exports = {insertSignUp};
