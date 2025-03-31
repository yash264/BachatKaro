const mongoose = require("mongoose");
const personData = require("../models/UserData");

const register = async (req, res) => {
    try {
        const ifExists = await personData.findOne({ email: req.body.email });
        if (ifExists) {
            res.status(201).json("Email Already Exists");
        }
        else {
            const registerPerson = new personData({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            const registered = await registerPerson.save();

            res.status(201).json({
                success: true,
                message: "registered"
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { register }