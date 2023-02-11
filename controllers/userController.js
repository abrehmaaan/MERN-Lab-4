const UserProfile = require("../models/userModel")
const insertUserProfile = async(req, res)=>{
    try{
        const user = new UserProfile({
            username: req.body.username,
            name: req.body.name,
            gender: req.body.gender,
            city: req.body.city,
            dateOfBirth: req.body.dob,
            occupation: req.body.occupation
        })
        const result = await user.save()
        res.send("Registration Successful")
    }
    catch(err){
        res.send(err.message)
    }
}
module.exports = {insertUserProfile};
