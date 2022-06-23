// ROUTING
const express = require('express');
const router = express.Router();

const bible = require("./bible");

router.get('/bibles', bible)

module.exports = router;

