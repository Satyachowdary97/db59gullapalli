var zoo = require('../models/zoo');
// List of all zoos
exports.zoo_list = async function (req, res) {
    try {
        thezoos = await zoo.find();
        res.send(thezoos);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific zoo.
exports.zoo_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await zoo.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle zoo create on POST.

exports.zoo_create_post = async function (req, res) {
    console.log(req.body)
    let document = new zoo();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"zootype":"goat", "cost":12, "size":"large"}
    document.Name_of_the_Zoo = req.body.Name_of_the_Zoo;
    document.Location_of_the_Zoo = req.body.Location_of_the_Zoo;
    document.Number_of_animals_available_in_the_Zoo = req.body.Number_of_animals_available_in_the_Zoo;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle zoo delete form on DELETE.
exports.zoo_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await zoo.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle zoo update form on PUT.
exports.zoo_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await zoo.findById(req.params.id)
        // Do updates of properties
        if (req.body.Name_of_the_Zoo) toUpdate.Name_of_the_Zoo = req.body.Name_of_the_Zoo;
        if (req.body.Location_of_the_Zoo) toUpdate.Location_of_the_Zoo = req.body.Location_of_the_Zoo;
        if (req.body.Number_of_animals_available_in_the_Zoo) toUpdate.Number_of_animals_available_in_the_Zoo = req.body.Number_of_animals_available_in_the_Zoo;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS
// Handle a show all view
exports.zoo_view_all_Page = async function (req, res) {
    try {
        thezoos = await zoo.find();
        res.render('zoo', { title: 'zoo Search Results', results: thezoos });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.zoo_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await zoo.findById(req.query.id)
        res.render('zoodetail',
            { title: 'zoo Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a zoo.
// No body, no in path parameter, no query.
// Does not need to be async
exports.zoo_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('zoocreate', { title: 'zoo Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a zoo.
// query provides the id
exports.zoo_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await zoo.findById(req.query.id)
        res.render('zooupdate', { title: 'zoo Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.zoo_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await zoo.findById(req.query.id)
        res.render('zoodelete', { title: 'zoo Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};




