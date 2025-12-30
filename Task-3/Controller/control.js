let fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

let product = data.products;

// console.log(product) //all products obj
exports.getProduct = (req, res) => {
  res.json({ product });
};

exports.postProduct = (req, res) => {
  let pro = req.body;
  product.push(pro);
  res.json(product);
};

exports.putProduct = (req, res) => {
  let id = req.params.id;
  let Index = product.findIndex((p) => p.id == id);
  product.splice(Index, 1, { ...req.body, id: id });
  console.log(id);
  res.json({ message: "updated" });
};

exports.deleteProduct = (req,res) => {
  
  let id = req.params.id;
  let Index = product.findIndex((p) => p.id == id);
  product.splice(Index,1);
  res.json({message:`prdouct ${id} has been deleted`})

};
