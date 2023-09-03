const express = require('express');
const path = require('path');
const {Login} = require('./Auth/AuthRequest')

const port = "3000"
const app = express();

//middle ware funtions
//set up server to locate static applications and EJS pages
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../Client/views'));//show express the views directory
app.use('/images', express.static(path.join(__dirname, '../Client/images')));
app.use('/Partials',express.static(path.join(__dirname, '../Client/Partials')));

//routs
app.get('/',(req,res)=>{
    
    res.render("dashboard")
})

app.get("/Login", function(req, res){
    res.render("login-register")
})

app.post("/Login", async function(req, res){
    let UserName = req.body.UserName
    let Password = req.body.Password

    let value = await Login(UserName, Password)
    console.log(value.Login)
    if(value.Login == "True"){
        return res.redirect("/")
    }else{
        return res.render("login-register")
    }
})

app.listen(port, ()=>{//server listens on port 3000
    console.log("website hosted on port " + port)
    console.log("go to localhost:3000 in your Browser")
})