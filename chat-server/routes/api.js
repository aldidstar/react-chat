var express = require('express');
var router = express.Router();
const helpers = require("../helpers/util");
const apiUsers = require("../api/apiUsers")
const apiChats = require("../api/apiChats")



// API USER
router.get('/users', apiUsers.userRead)
router.post('/register', apiUsers.userRegister)
router.post('/login', apiUsers.userLogin)
router.delete('/users/:id',  apiUsers.userDelete)

// API CHAT
router.get('/chats',  helpers.verifyToken, apiChats.chatRead)
router.post('/chats', helpers.verifyToken,   apiChats.chatCreate)
router.delete('/chats/:id', helpers.verifyToken,   apiChats.chatDelete)
router.put('/chats/:id', helpers.verifyToken, apiChats.chatUpdate)





module.exports = router;