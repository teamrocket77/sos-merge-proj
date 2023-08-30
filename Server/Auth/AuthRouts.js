const axios = require('axios')

async function Login(username,password) {
    let authResponse = await axios.post("http://127.0.0.1:5000/Login",
    {
        UserName:username,
        Password:password
    }).then(function(response) {
        return response.data
    }).catch(function(error){
        return error
    }); 
    return authResponse
}

module.exports = {Login}