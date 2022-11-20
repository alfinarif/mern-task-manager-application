const express = require('express')
const router = express.Router()

const TestController = require('../controllers/testController')

router.post('/', TestController.HelloWorld);

module.exports = router;
