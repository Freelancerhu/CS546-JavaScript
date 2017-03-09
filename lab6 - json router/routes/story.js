const express = require('express');
const router = express.Router();
const ddata = require("../data/index.js");

router.get("/", (req, res) => {
	ddata.read("./data/story.json").then((post) => {
		res.json(post);
	}), () => {
		res.status(404).json({message: "Post not found"});
	};
});
module.exports = router;