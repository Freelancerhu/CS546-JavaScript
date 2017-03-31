const express = require('express');
const router = express.Router();
const data = require("../data");
const checker= data.checker;

var ip = new Array();
var inp = new Array();
router.get("/server", (req, res) => {
    res.render("checker/server", {});
});


router.post("/server", (req, res) => {
    let testStr = req.body.TextArea;
    let result;

    try {
		result = checker.textStr(testStr);
    } catch (e) {
        res.render("checker/server", {testStr:testStr, error: e, ip: ip, inp: inp});
        return;
    }
    if (result) {
        ip.push(testStr);
        res.render("checker/server", {testStr:testStr, result: "It is palindrome.", ip: ip, inp: inp})
    } else {
        inp.push(testStr);
        res.render("checker/server", {testStr:testStr, result: "It is not a palindrome.",ip: ip, inp: inp})
    }
});

module.exports = router;