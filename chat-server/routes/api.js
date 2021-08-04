var express = require('express');
var router = express.Router();
// const helpers = require("../helpers/util");
const apiUsers = require("../api/apiUsers")


// API USER
router.get('/users', apiUsers.userRead)
router.post('/register', apiUsers.userRegister)
router.post('/login', apiUsers.userLogin)
router.delete('/users/:id',  apiUsers.userDelete)

// API CHAT

module.exports = router;