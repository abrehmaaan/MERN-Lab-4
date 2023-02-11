const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const signup = require("./controllers/signupController")
const user = require("./controllers/userController")

mongoose.connect("mongodb://localhost:27017/emart").then(()=>{
    console.log("Connection Established...");
}).catch((err)=>{
    console.log(err);
})

const app = new express()
app.set("view engine", "pug")
app.set("views", "./views")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req, res)=>{
    res.render("signup")
})

app.post("/signup", signup.insertSignUp)
app.post("/profile", user.insertUserProfile)

app.listen(8000, ()=>{
    console.log("Server Started...");
})