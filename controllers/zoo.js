var zoo = require('../models/zoo');
// List of all zoos
exports.zoo_list = async function(req, res) {
    try{
        thezoos = await zoo.find();
        res.send(thezoos);
        }
        catch(err){
            res.status(500);
            res.send(`{"error": ${err}}`);
            } 
        };
// for a specific zoo.
exports.zoo_detail = function(req, res) {
res.send('NOT IMPLEMENTED: zoo detail: ' + req.params.id);
};
// Handle zoo create on POST.

    exports.zoo_create_post = async function(req, res) {
        console.log(req.body)
        let document = new zoo();
        // We are looking for a body, since POST does not have query parameters.
        // Even though bodies can be in many different formats, we will be picky
        // and require that it be a json object
        // {"zootype":"goat", "cost":12, "size":"large"}
        document.Name_of_the_Zoo = req.body.Name_of_the_Zoo;
        document.Location_of_the_Zoo = req.body.Location_of_the_Zoo;
        document.Number_of_animals_available_in_the_Zoo = req.body.Number_of_animals_available_in_the_Zoo;
        try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
            res.status(500);
            res.send(`{"error": ${err}}`); 
        }
        };

// Handle zoo delete form on DELETE.
exports.zoo_delete = function(req, res) {
res.send('NOT IMPLEMENTED: zoo delete DELETE ' + req.params.id);
};
// Handle zoo update form on PUT.
exports.zoo_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: zoo update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.zoo_view_all_Page = async function(req, res) {
    try{
    thezoos = await zoo.find();
    res.render('zoo', { title: 'zoo Search Results', results: thezoos });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);           }
    };