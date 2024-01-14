const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define the schema for the string list
const ListSchema = new Schema({
	value: {
		type: String,
		required: true,
	},
});

// Create the model for the string list
const List = mongoose.model("List", ListSchema);

module.exports = List;
