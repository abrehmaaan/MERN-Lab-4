const mongoose = require("mongoose")
const signup = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            let regex = /^[a-zA-Z0-9._-]{3,}$/;
            if (!regex.test(value)) {
                throw new Error("Username must contain only letters, digits, periods, underscores, and hyphens and at least 3 characters long!")
            }
        }
    },
    password:{
        type: String,
        requied: true,
        validate(value){
            let regex = /^.{8,}$/;
            if (!regex.test(value)) {
                throw new Error("Password must be at least 8 characters long!")
            }
        }
    }
})

const SignUp = mongoose.model("SignUp", signup);
module.exports = SignUp;