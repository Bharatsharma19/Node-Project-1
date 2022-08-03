var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("product", {
    title: "Products",
    status: false,
  });
});

router.get("/checkout", function (req, res) {
  console.log("Request ", req.query);

  var pn = req.query.productName;
  var qty = req.query.qty;
  var rate = 0;

  if (pn == "Shirt") {
    rate = 999;
  } else if (pn == "T-Shirt") {
    rate = 699;
  } else if (pn == "Jeans") {
    rate = 1599;
  } else if (pn == "Suit") {
    rate = 3999;
  }

  var amt = rate * qty;

  res.render("product", {
    status: true,
    title: "Products",
    productName: pn,
    qty: qty,
    rate: rate,
    amount: amt,
  });
});

module.exports = router;
