const Item = require("../schemas/products");

async function items(req, res) {
  const { username, data } = req.body;
  const { name, slug, category, brand, price, countInStock, image } = data;
  const newitem = await Item.create({
    username,
    name,
    slug,
    category,
    brand,
    price,
    countInStock,
    image,
  });
  return res.json({ status: "success", message: "created" });
}
async function getitems(req, res) {
  const allItem = await Item.find();
  const data = allItem;
  res.json(data);
}

module.exports = { items, getitems };
