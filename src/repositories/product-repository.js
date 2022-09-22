const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.get = async () =>
  await Product.find({ active: true }, "title description price _id active");

exports.create = async (data) => {
  const product = await Product(data);
  return product.save();
};

exports.put = async (id, body) => {
  await Product.findByIdAndUpdate(id, {
    $set: {
      title: body.title,
      description: body.description,
      price: body.price,
      active: body.active,
    },
  });
};

exports.getById = async (id) =>
  await Product.findOne({ _id: id }, "title description price _id active");

exports.deleteById = async (id) => {
  await Product.findByIdAndUpdate(id, {
    $set: {
      active: false,
    },
  });
};
