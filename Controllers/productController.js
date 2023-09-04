const Products = require("../Models/product");

exports.createProduct = async (req, res) => {
    console.log(req.body);
    const { name, price, categoryId, productColor } = req.body;
  
    const Product = new Products({
        name: name,
        price: price,
        categoryId : categoryId,
        productColor: productColor
    });
    const result = await Product.save();
    res.send(result);
  };

exports.getProduct = async (req, res) => {
    try {
        const { pageNumber, pageSize } = req.query; 
        // const pageSize = 1; 
        // const pageNumber = 2; 
        const skip = (pageNumber - 1) * pageSize;
      const result = await Products.find({})
    .skip(skip)
    .limit(pageSize)
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

exports.getUpdateProduct = async (req, res) => {
    console.log("done");
    try {
      const { name, price, categoryId, productColor } = req.body;
  
      const { id } = req.body;
      const updatedResult = await Products.findOneAndUpdate(
        { _id: id },
        { $set: { name, price, categoryId, productColor } },
        { new: true }
      );
      console.log("data was updated", updatedResult);
      res.status(200).json(updatedResult);
    } catch (error) {
      console.log(error.message);
      res.status(501).json({ message: error.message });
    }
  };

exports.getDeleteProduct = async (req, res) => {
    console.log("deleted", req.query);
    try {
      const { id } = req.body;
      console.log(id);
      const deletedResult = await Products.deleteOne({ _id: id });
      console.log("data was deleted", deletedResult);
      res.status(200).json(deletedResult);
    } catch (error) {
      console.log(error.message);
      res.status(501).json({ message: error.message });
    }
  };

exports.getProductById = async (req, res) => {
    try {
      const { ProductId } = req.body;
      const result = await Products.find({
        _id: ProductId,
      });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };
exports.getProductByCategoryId = async (req, res) => {
    console.log("Complete");
    try {
      const { categoryId } = req.body;
      console.log(categoryId);
      const result = await Products.find({
        categoryId: categoryId,
      });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };