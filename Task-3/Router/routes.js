let express = require("express");
let productControllar = require("../Controller/control")
let router = express.Router();

router
.get(("/"),productControllar.getProduct)
.post(("/"),productControllar.postProduct)
.put(("/:id"),productControllar.putProduct)
.delete(("/:id"),productControllar.deleteProduct)

exports.router = router 