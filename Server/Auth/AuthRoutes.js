const {LoginReq} = require('./AuthRequest')


async function Login(req, res){
    let UserName = req.body.UserName
    let Password = req.body.Password

    let value = await LoginReq(UserName, Password)
    console.log(value.Login)
    if(value.Login == "True"){
        res.cookie('Token', 'testVal');
        return res.redirect("/")
    }else{
        return res.render("login-register")
    }
}

module.exports={Login}