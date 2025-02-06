const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { email, password, fullName } = req.body;

    const hashPassword = await userService.hashPassword(password);

    const user = await userService.createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashPassword,
    });

    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
};
