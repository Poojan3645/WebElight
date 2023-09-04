const categories = require("../Models/category")

exports.createCategory = async (req, res) => {
    const { categoryName, modelName, Range } = req.body;
  
    const category = new categories({
      categoryName,
      modelName,
      Range
    });
    const result = await category.save();
    res.send(result);
  };

exports.getAllCategory = async (req, res) => {
    try {
      const { pageNumber, pageSize } = req.query; 
        // const pageSize = 1; 
        // const pageNumber = 2; 
        const skip = (pageNumber - 1) * pageSize;
      const result = await categories.find({})
    .skip(skip)
    .limit(pageSize)
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

exports.getCategoryById = async (req, res) => {
    try {
      const { CategoryId } = req.body;
      const result = await categories.find({
        _id: CategoryId,
      });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };
  
exports.getUpdateCategory = async (req, res) => {
    console.log("done");
    try {
      const { categoryName, modelName, Range } = req.body;
  
      const { id } = req.body;
      const updatedResult = await categories.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            categoryName,
            modelName,
            Range
          },
        },
        { new: true }
      );
      console.log("data was updated", updatedResult);
      res.status(200).json(updatedResult);
    } catch (error) {
      console.log(error.message);
      res.status(501).json({ message: error.message });
    }
  };

exports.getDeleteCategory = async (req, res) => {
    console.log("deleted", req.query);
    try {
      const { id } = req.body;
      console.log(id);
      const deletedResult = await categories.deleteOne({ _id: id });
      console.log("data was deleted", deletedResult);
      res.status(200).json(deletedResult);
    } catch (error) {
      console.log(error.message);
      res.status(501).json({ message: error.message });
    }
  };
