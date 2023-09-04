const User = require("../Models/user");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const jwtKey = "e-com";
const secretKey = "secretkey";

//User Create
exports.createUser = async (req, res) => {
    console.log("req.body");
    const { FirstName, LastName, email, password  } = req.body;
  
    const Users = new User({
      FirstName: FirstName,
      LastName: LastName,
      email: email,
      password: password,
    });
    const result = await Users.save();
    res.send(result);
  };

exports.getUser = async (req, res) => {
    try {
      const { pageNumber, pageSize } = req.query; 
        // const pageSize = 1; 
        // const pageNumber = 2; 
        const skip = (pageNumber - 1) * pageSize;
      const result = await User.find({})
    .skip(skip)
    .limit(pageSize)
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

exports.getUserById = async (req, res) => {
    try {
      const { UserId } = req.body;
      const result = await User.find({
        _id: UserId,
      });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

exports.getUpdateUser = async (req, res) => {
    console.log(req.body);
    try {
      const {FirstName, LastName, email, password } =req.body;
  
      const { id } = req.body;
      const updatedResult = await User.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            FirstName,
            LastName,
            email,
            password,
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

exports.getDeleteUser = async (req, res) => {
    console.log("deleted", req.query);
    try {
      const { id } = req.body;
      console.log(id);
      const deletedResult = await User.deleteOne({ _id: id });
      console.log("data was deleted", deletedResult);
      res.status(200).json(deletedResult);
    } catch (error) {
      console.log(error.message);
      res.status(501).json({ message: error.message });
    }
  };

  exports.createLogins = async (req, res) => {
    console.log("hiii console.");
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }
  
    const userLogin = await User.findOne({ email: email });
  
    if (!userLogin) {
      res.status(400).json({ error: "Invalid credentials" });
    }
  
    const isMatch = await bcrypt.compare(password, userLogin.password);
  
    if (!isMatch) {
      res.status(400).json({ error: "user error" });
    }
  
    const user = { id: 1, username: "poojan", email: "poojan@gmail.com" };
  
    const token = await Jwt.sign(user, secretKey, { expiresIn: "1h" });
    console.log("token == 1", token);
    res.json({
      token,
    });
  };

exports.verifyToken = (req, res, next) => {
    let tokens = req.headers["authorization"];
    if (tokens) {
      console.log("tokens", tokens);
  
      Jwt.verify(tokens, secretKey, (err, valid) => {
        if (err) {
          console.log("err", err);
          res.status(401).send({ result: "please provide a valid token" });
        } else {
          res.status(200).send({ result: "token is verify" });
  
          
        }
      });
    } else {
      res.status(403).send({ result: "Please add token with header" });
    }

  }