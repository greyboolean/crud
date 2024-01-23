const Item = require("../models/itemModel");

// Controller functions for item routes
const itemController = {
	// GET all items
	getAllItems: async (req, res) => {
		try {
			const items = await Item.find();
			res.status(200).json({
				success: true,
				data: items,
				message: "All items fetched successfully",
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	},

	// CREATE a new item
	createItem: async (req, res) => {
		try {
			const newItem = new Item(req.body);
			const savedItem = await newItem.save();
			res.status(201).json({
				success: true,
				data: savedItem,
				message: "Item created successfully",
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	},

	// GET a single item by ID
	getItemById: async (req, res) => {
		try {
			const item = await Item.findById(req.params.id);
			if (!item) {
				return res.status(404).json({
					success: false,
					message: "Item not found",
				});
			}
			res.status(200).json({
        success: true,
        data: item,
        message: "Item fetched successfully"
      });
		} catch (error) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	},

	// UPDATE an existing item
	updateItem: async (req, res) => {
		try {
			const updatedItem = await Item.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			);
			if (!updatedItem) {
				return res.status(404).json({
					success: false,
					message: "Item not found",
				});
			}
			res.status(200).json({
				success: true,
				data: updatedItem,
				message: "Item updated successfully",
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	},

	// DELETE an item
	deleteItem: async (req, res) => {
		try {
			const deletedItem = await Item.findByIdAndDelete(req.params.id);
			if (!deletedItem) {
				return res.status(404).json({
					success: false,
					message: "Item not found",
				});
			}
			res.status(204).json({
				success: true,
				message: "Item deleted successfully",
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: error.message,
			});
		}
	},
};

module.exports = itemController;
