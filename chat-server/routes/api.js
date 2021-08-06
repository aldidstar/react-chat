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
router.get('/chats',  apiChats.chatRead)
router.post('/chats',  apiChats.chatCreate)
router.delete('/chats/:id',  apiChats.chatDelete)
router.put('/chats/:id', helpers.verifyToken, apiChats.chatUpdate)





module.exports = router;