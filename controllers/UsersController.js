const User = require("../models/Users")
const bcrypt = require('bcrypt')
const helpers = require('../helpers/Helpers')

class Users {
    async index(req, res){
        try {
            const users = await User.find(); // Assuming you have a method to retrieve users from the database
            res.json({
                "success": true,
                "data": users,
                "server_response": "ok"
            });
        } catch (error)
        {
            res.status(500).json({
                error: "An error occurred"
            })
        }
    }

    async store(req, res){
        try {
            const hashedPassword = helpers.generateHashPassword(req.body.password);

            const user_json = {
                "username": req.body.username,
                "password": hashedPassword,
                "name": req.body.name
            }

            const UserCreate = await User.create(user_json)

            res.status(200).json({
                "success": true,
                "_id": UserCreate._id,
                "server_response": "ok"
            })

        } catch (error)
        {
            res.status(500).json({error: "An error occurred"})
        }
    }

    async update(req, res)
    {
        try {
            const hashedPassword = helpers.generateHashPassword(req.body.password);

            const user_json = {
                "username": req.body.username,
                "password": hashedPassword,
                "name": req.body.name
            }

            const updatedUser = await User.findByIdAndUpdate(
                req.body._id, user_json,
                { new: true }
            );

            res.status(200).json({
                success: true,
                updatedUser,
                server_response: "ok",
              });
        } catch (error)
        {
            res.status(400).json({
                "success": false,
                "error": error,
                "server_response": "error"
            })
        }
    }

    async destroy(req, res)
    {
        try {
            const deleteUser = await User.findByIdAndDelete(req.body._id)

            if (!deleteUser) {
                // If the user is not found
                return res.status(404).json({
                  success: false,
                  error: "User not found",
                  server_response: "error"
                });
            }

            res.status(200).json({
                "success": true,
                "server_response": "ok"
            })
        }
        catch (error)
        {
            res.status(400).json({
                "success": false,
                "error": error,
                "server_response": "error"
            })
        }
    }
}

module.exports = new Users();