const checkerRoutes = require("./checker");

const constructorMethod = (app) => {
    app.use("/checker", checkerRoutes);

    app.use("*", (req, res) => {
        res.redirect("/checker/server");
    })
};

module.exports = constructorMethod;