const mongoose = require("mongoose")
const zooSchema = mongoose.Schema({
    Name_of_the_Zoo: {
        type: String,
        required: [true, "Name required"]
    },
    Location_of_the_Zoo: String,
    Number_of_animals_available_in_the_Zoo: {
        type: Number,
        min: [1000, "Min value is 1000"],
        max: [4000, "Max value is 400"]
    }
})
module.exports = mongoose.model("zoo", zooSchema)