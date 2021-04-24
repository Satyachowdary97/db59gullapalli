var express = require('express');
const zoo_controlers = require('../controllers/zoo');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET home page. */

router.get('/', zoo_controlers.zoo_view_all_Page);
router.get('/detail', zoo_controlers.zoo_view_one_Page);
router.get('/create', secured, zoo_controlers.zoo_create_Page);
router.get('/update', secured, zoo_controlers.zoo_update_Page);
router.get('/delete', secured, zoo_controlers.zoo_delete_Page);

module.exports = router;