const express = require("express");
const itemController = require("../controllers/itemController");

const router = express.Router();

/*
// GET all items
router.get("/", itemController.getAllItems);

// GET a single item
router.get("/:id", itemController.getItemById);

// CREATE a new item
router.post("/", itemController.createItem);

// UPDATE an existing item
router.patch("/:id", itemController.updateItem);

// DELETE an item
router.delete("/:id", itemController.deleteItem);
*/

// Define routes for the root path '/'
router
	.route("/")
	// GET all items
	.get(itemController.getAllItems)
	// CREATE a new item
	.post(itemController.createItem);

// Define routes for the path with item ID '/:id'
router
	.route("/:id")
	// GET a single item
	.get(itemController.getItemById)
	// UPDATE an existing item
	.patch(itemController.updateItem)
	// DELETE an item
	.delete(itemController.deleteItem);

module.exports = router;
