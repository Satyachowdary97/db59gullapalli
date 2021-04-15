var express = require('express');
const zoo_controlers= require('../controllers/zoo');
var router = express.Router();

/* GET home page. */

router.get('/', zoo_controlers.zoo_view_all_Page );
router.get('/detail', zoo_controlers.zoo_view_one_Page);
router.get('/create', zoo_controlers.zoo_create_Page);
router.get('/update', zoo_controlers.zoo_update_Page);
router.get('/delete', zoo_controlers.zoo_delete_Page);

module.exports = router;
