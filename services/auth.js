const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const mongoose = require("mongoose");
const UserService = require("./user");
const User = require("../models/User");

let userService = new UserService();

class authService {

    authService() {

    }

    getLogin(req, res) {
        res.render("login");
    }

    async postLogin(req, res) {
        try {
            const user = await User.findOne({
                name: req.body.name
            });
            if (user) {

                if (user.password === req.body.password) {

                    //creating token
                    const token = await jwt.sign({
                        userId: user._id
                    }, process.env.SECRET_KEY);

                    // console.log(token);

                    //embedding the token in the request header
                    res.cookie('secret', token, {
                        maxAge: 86400,
                        httpOnly: true
                    });
                    

                    console.log("Logged in Successfully");
                    return res.status(200).json("success");
                } else {
                    console.log("Invalid username or password");
                }
            } else {
                console.log("User not found");
            }
        } catch (error) {
            console.log("Server error");
            console.error(error);
            process.exit(1);
        }
    }

    getRegister(req, res) {
        res.render("register");
    }

    async postRegister(req, res) {
        userService.createUser(req, res);
    }
}

module.exports = authService;