const mongoose = require("mongoose")
const zooSchema = mongoose.Schema({
    Name_of_the_Zoo: String,
    Location_of_the_Zoo: String,
    Number_of_animals_available_in_the_Zoo: Number
})
module.exports = mongoose.model("zoo",zooSchema)