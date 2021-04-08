var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var zoo_controller = require('../controllers/zoo');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// zoo ROUTES ///
// POST request for creating a zoo.
router.post('/resource/zoos', zoo_controller.zoo_create_post);
// DELETE request to delete zoo.
router.delete('/resource/zoos/:id', zoo_controller.zoo_delete);
// PUT request to update zoo.
router.put('/resource/zoos/:id', zoo_controller.zoo_update_put);
// GET request for one zoo.
router.get('/resource/zoos/:id', zoo_controller.zoo_detail);
// GET request for list of all zoo items.
router.get('/resource/zoos', zoo_controller.zoo_list);
module.exports = router;