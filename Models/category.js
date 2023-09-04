const mongoose  = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required : true,
    },
    modelName: {
        type: String,
        required :true
    },
    Range: {
        type: String,
        required: true
    }
});

const categories = new mongoose.model("categories", categorySchema);
module.exports = categories;