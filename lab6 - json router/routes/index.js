const aboutRouter = require("./about");
const storyRouter = require("./story");
const educationRouter = require("./education");
var express = require('express');

const constructorMethod = (app) => {
	app.use("/about", aboutRouter);
	app.use("/story", storyRouter);
	app.use("/education", educationRouter);
	
	app.use("*", (require, response) => {
		response.status(404).json({error: "Not Found"});
	});
};

module.exports = constructorMethod;