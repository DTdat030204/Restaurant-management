const express = require('express')
const controller = require('../controller/user.controller')


const router = express.Router()

router.get('/', controller.getUsers)

router.get('/:id' , controller.getUser)

router.patch('/:id' , controller.updateUser)

router.post('/register' , controller.register)

router.post('/login' , controller.login)

module.exports = router;