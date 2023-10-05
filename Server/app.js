const express = require('express');
const path = require('path');
const {Login} = require('./Auth/AuthRoutes')
const cookieParser = require('cookie-parser')
const {verifyToken} = require('./Auth/AuthMiddleware')

const port = "3000"
const app = express();

//middle ware funtions
//set up server to locate static applications and EJS pages
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('views', path.join(__dirname, '../Client/views'));//show express the views directory
app.use('/images', express.static(path.join(__dirname, '../Client/images')));
app.use('/Partials',express.static(path.join(__dirname, '../Client/Partials')));

//Get routs
app.get('/', verifyToken,(req,res)=>{
    //Renders the dashboard page
    res.render("dashboard")
})
app.get("/Login", function(req, res){
    //Renders the Login page
    res.render("Login")
})
app.get("/RegisterOrg", function(req, res){
    //Renders the Organization register page
    res.render("RegisterOrg")
})
app.get("/RegOrgSuccess", function(req, res){
    //Renders the register success page after registering an organization
    res.render("RegOrgSuccess")
})

//Post routs
app.post("/Login", Login)//route that logs user in

app.listen(port, ()=>{//server listens on port 3000
    console.log("website hosted on port " + port)
    console.log("go to localhost:3000 in your Browser")
})