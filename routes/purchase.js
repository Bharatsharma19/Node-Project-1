var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("product", { title: "Products" });
});

router.get("/checkout", function (req, res) {
  console.log("Request ", req.query);

  var pn = req.query.productName;
  var qty = req.query.qty;
  var rate = 0;

  if (pn == "Suit") {
    rate = 999;
  } else if (pn == "T-Shirt") {
    rate = 699;
  } else if (pn == "Jeans") {
    rate = 1599;
  } else if (pn == "Suit") {
    rate = 3999;
  } else if (pn == " ") {
    var error = "Please select a product";
  }

  var amt = rate * qty;

  res.render("product", {
    productName: pn,
    error: error,
    qty: qty,
    rate: rate,
    amount: amt,
  });
});

module.exports = router;
