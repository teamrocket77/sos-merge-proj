
function verifyToken(req,res,next){
    if(!req.cookies.Token){
        return res.redirect("/Login")
    }next()
}

module.exports = {verifyToken}