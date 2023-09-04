const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerYaml = require('yamljs');
const path = require("path");
const jwt = require("jsonwebtoken");
const secretKey = "secretkey";

const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const swaggerDoc = swaggerYaml.load('./swagger.yaml');

mongoose
  .connect(
    "mongodb+srv://poojanpatel3645:76jjntWtwGyqYWDq@cluster0.q6s5m40.mongodb.net/shop?authSource=admin&replicaSet=atlas-mn9dmy-shard-0&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("console connected...."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(8080, () => console.log("server on!"));
