var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("product", { title: "Products" });
});

router.get("/get_amt", function (req, res) {

    

  res.render("product");
});

module.exports = router;
