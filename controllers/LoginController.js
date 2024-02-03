const User = require("../models/Users")
const helpers = require('../helpers/Helpers')

class LoginController {
    async login(req, res){
        try {
            const user = await User.findOne({
                username: req.body.username
            });

            // res.send(user.password)
            
            if (user) {
                const checkPassword = helpers.comparePassword(req.body.password, user.password);

                if (checkPassword) {
                    res.status(200).json({
                        success: true,
                        message: "Login Successfully",
                        server_response: "ok"
                    });
                } else {
                    res.status(403).json({
                    success: false,
                    message: 'Username/Password does not match',
                    server_response: "error"
                    });
                }
            } else {
                res.status(403).json({
                    success: false,
                    message: "User not found",
                    server_response: "error"
                });
            }
        } catch (error)
        {
            res.status(400).json({
                "success": false,
                "error": error,
                "server_response": "error"
            })
        }
    }
}

module.exports = new LoginController()