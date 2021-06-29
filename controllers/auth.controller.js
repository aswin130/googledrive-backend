const user = require('../models/auth.model')
const expressJwt = require('express-jwt')
const _ = require('lodash');
const fetch = require('node-fetch');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandling');



exports.registerController = (req, res) => {
    const { name, email, password } = req.body
    console.log(name, email, password)
}