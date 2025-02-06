const express = require("express");
const userController = require("../controller/user.controller");
const routes = express.Router();
const {body } = require("express-validator");

routes.post('/register', [
      body('email').isEmail() .withMessage('Please enter a valid email'),
      body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long'),
      body('fullName.firstName').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),

],
  userController.registerUser
)


module.exports = routes;


