var express = require('express');
const zoo_controlers= require('../controllers/zoo');
var router = express.Router();

/* GET home page. */

router.get('/', zoo_controlers.zoo_view_all_Page );

module.exports = router;
