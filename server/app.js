const express = require("express");
const mongoose = require("mongoose");
// Load environment variables from .env file
require("dotenv").config();

const app = express();

// Connect to MongoDB
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
	res.send("Hello, world!");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
