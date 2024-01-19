const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define the schema for the string item
const ItemSchema = new Schema({
	value: {
		type: String,
		required: true,
	},
});

// Create the model for the string item
const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
